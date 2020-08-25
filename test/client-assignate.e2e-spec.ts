import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Trainer } from '../src/trainer/domain/trainer';
import { Client } from '../src/client/domain/client';
import { TrainerModule } from '../src/trainer/trainer.module';
import { ClientModule } from '../src/client/client.module';
import { ClientAssignationModule } from '../src/client-assignation/client-assignation.module';

describe('TrainerController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [TrainerModule, ClientModule, ClientAssignationModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Create trainer', async () => {
    await createTrainer(new Trainer(null, 'trainer1', 3, 2));
    await createTrainer(new Trainer(null, 'trainer2', 4, 3));
    await createTrainer(new Trainer(null, 'trainer3', 2, 1));

    await createClient(new Client(null, 'client1', 10));
    await createClient(new Client(null, 'client2', 8));
    await createClient(new Client(null, 'client3', 9));
    await createClient(new Client(null, 'client4', 7));
    await createClient(new Client(null, 'client5', 5));
    await createClient(new Client(null, 'client6', 6));
    await createClient(new Client(null, 'client7', 1));

    return request(app.getHttpServer())
      .get('/client-assignation')
      .expect(200)
      .expect(response => {
        const body = response.body;
        expect(body.length).toBe(4);
      });
  });

  function createTrainer(trainer: Trainer) {
    return request(app.getHttpServer())
      .post('/trainer')
      .send(trainer);
  }

  function createClient(client: Client) {
    return request(app.getHttpServer())
      .post('/client')
      .send(client);
  }
});
