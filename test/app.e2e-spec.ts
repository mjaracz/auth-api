import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect([
        {
          userId: 0,
          username: 'michal@example.pl',
          name: 'michal',
          surname: 'kliniecki',
          password:
            '$2b$09$drMgYcU/obHFWjYB/Rf/M.Ka7fLO0QeBRmpKNGCceeTvLGw8cSdXe',
        },
        {
          userId: 1,
          username: 'john@gmail.com',
          name: 'john',
          surname: 'wadowski',
          password:
            '$2b$09$YRMYrcHFRmYVHJ0nucZfduKJbQ1lOYjWulQ7VY2GFPtYyI2JFcVh2',
        },
        {
          userId: 2,
          username: 'chris@onet.pl',
          name: 'chris',
          surname: 'litowski',
          password:
            '$2b$09$rE/UnO0N4DRNDQHs55Yexu7jmAmmPpsbXEA9qur07qSRAcPEAYUVG',
        },
      ]);
  });
});
