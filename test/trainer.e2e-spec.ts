import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Trainer } from '../src/trainer/domain/trainer';
import { TrainerModule } from '../src/trainer/trainer.module';

describe('TrainerController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TrainerModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Create trainer', () => {
    return request(app.getHttpServer())
      .post('/trainer')
      .send(new Trainer(null, 'test1', 5, 4))
      .expect(201)
      .expect(response => {
        const body: Trainer = response.body;
        expect(body.id).not.toEqual(null);
        expect(body.name).toBe('test1');
        expect(body.reputation).toBe(5);
        expect(body.availablePlaces).toBe(4);
      });
  });

  it('Delete trainer', async () => {
    const response = await request(app.getHttpServer())
      .post('/trainer')
      .send(new Trainer(null, 'test2', 3, 5));

    return request(app.getHttpServer())
      .delete(`/trainer/${response.body.id}`)
      .expect(200);
  });
});
