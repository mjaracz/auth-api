require('dotenv').config();

import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { MailerProvider } from './providers/mailer';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './models/users';
import { CreateUserDto } from './dto/create-user';
import { UpdatePassDto } from './dto/update-pass';
import * as bc from 'bcrypt';

@Injectable()
export class UsersService {
  private readonly saltRound: number;
  private rememberPassUser: Users;

  constructor(
    private readonly mailerService: MailerProvider,
    private readonly jwtService: JwtService,
    @InjectModel('Users')
    private readonly usersModel: Model<Users>,
  ) {
    this.saltRound = parseInt(process.env.SALT_ROUND, 10);
  }

  async findAll() {
    return this.usersModel.find({}).exec();
  }
  async findByUsername(name: string): Promise<Users> {
    return this.usersModel.findOne({ username: name }).exec();
  }

  async create(createUserDto: CreateUserDto) {
    const users = await this.usersModel.find().exec();
    const findUsers = users.find(
      (user: Users) => user.username === createUserDto.username,
    );
    if (!findUsers) {
      const hash = bc.hashSync(createUserDto.password, this.saltRound);
      const addedUser = new this.usersModel({
        userId: users.length,
        ...createUserDto,
        password: hash,
      });
      return addedUser.save();
    } else {
      return {
        statusCode: 403,
        message: 'this username is occupied',
      };
    }
  }

  async deleteByIdOrName(id?: number, username?: string) {
    if (id) return this.usersModel.deleteMany({ userId: id }).exec();
    if (username) return this.usersModel.deleteMany({ username }).exec();
  }

  async findUserAndSendMail(username: string) {
    const user = await this.findByUsername(username);
    if (user) {
      const sendEmailResult = await this.mailerService.sendMail(user);
      this.rememberPassUser = user;
      if (sendEmailResult) return { message: 'email send' };
      else return { message: 'email not send, pleas try again' };
    } else {
      return {
        statusCode: 403,
        message: 'email not found in database',
      };
    }
  }

  async changePassword(updatePassDto: UpdatePassDto) {
    const hash = bc.hashSync(updatePassDto.password, this.saltRound);
    return this.usersModel
      .findOneAndUpdate(
        { username: this.rememberPassUser.username },
        { password: hash },
        { new: true, useFindAndModify: false },
      )
      .exec();
  }
}
