import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class MailerProvider {
  private readonly logger;

  constructor(
    private mailerService: MailerService,
    private jwtService: JwtService,
  ) {
    this.logger = new Logger();
  }
  async sendMail(user) {
    const token = await this.jwtService.sign({
      username: user.username,
      sub: user.userId,
    });
    return this.mailerService
      .sendMail({
        to: user.username,
        from: 'michal19996@gmail.com',
        subject: 'Remember Password, no-replay ✔',
        text: 'welcome',
        html: `
          <div>
            <h1>To remember your password pleas fallow to the link</h1>
            <a href="http://localhost:3000/change-pass/${token}" target='_blank'>LINK</a>
          </div>`,
      })
      .catch(err => {
        this.logger.verbose(err.message);
      });
  }
}
