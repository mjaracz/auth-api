import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user';
import { JwtGuard } from '../auth/quards/jwt.guard';
import { UpdatePassDto } from './dto/update-pass';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(JwtGuard)
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get('remember-password')
  async findUserAndSendMail(@Query('username') username: string) {
    return this.usersService.findUserAndSendMail(username);
  }

  @UseGuards(JwtGuard)
  @Put('change-pass')
  async changePassword(@Body() updatePassDto: UpdatePassDto) {
    return this.usersService.changePassword(updatePassDto);
  }

  @UseGuards(JwtGuard)
  @Delete()
  async removeUserByIdOrName(
    @Query('id') id: number,
    @Query('username') name: string,
  ) {
    return this.usersService.deleteByIdOrName(id, name);
  }
}
