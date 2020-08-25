import { Injectable } from '@nestjs/common';
import { Client } from '../domain/client';

@Injectable()
export class ClientService {
  private clientList: Client[] = [];

  createClient(client: Client) {
    client.id = this.dynamicId();
    this.clientList.push(client);
    return client;
  }

  private dynamicId() {
    return new Date().getTime();
  }
}
