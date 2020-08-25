import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Client } from '../src/client/domain/client';
import { ClientModule } from '../src/client/client.module';

describe('TrainerController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ClientModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Create client', () => {
    return request(app.getHttpServer())
      .post('/client')
      .send(new Client(null, 'test1', 5))
      .expect(201)
      .expect(response => {
        const body: Client = response.body;
        expect(body.id).not.toEqual(null);
        expect(body.name).toBe('test1');
        expect(body.trainerReputation).toBe(5);
      });
  });

  it('Delete client', async () => {
    const response = await request(app.getHttpServer())
      .post('/client')
      .send(new Client(null, 'test2', 3));

    return request(app.getHttpServer())
      .delete(`/client/${response.body.id}`)
      .expect(200);
  });

  it('Update cleint', async () => {
    const response = await request(app.getHttpServer())
      .post('/client')
      .send(new Client(null, 'test3', 3));

    const client: Client = response.body;
    client.name = 'test4';

    return request(app.getHttpServer())
      .put('/client')
      .send(client)
      .expect(200)
      .expect(client);
  });

  it('Get all client list', async () => {
    const response = await request(app.getHttpServer())
      .post('/client')
      .send(new Client(null, 'test3', 3));

    return request(app.getHttpServer())
      .get('/client/all')
      .expect(200)
      .expect(response => {
        expect(response.body.length).toBe(1);
      });
  });
});
