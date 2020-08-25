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

  deleteClient(id: Number) {
    const index = this.clientList.findIndex(client => client.id === id);
    if (index != null) {
      this.clientList.splice(index, 1);
    }
  }

  updateClient(client: Client) {
    const storedClient = this.clientList.find(aux => aux.id === client.id);
    if (storedClient != null) {
      storedClient.name = client.name;
      storedClient.trainerReputation = client.trainerReputation;
    }
    return storedClient;
  }

  private dynamicId() {
    return new Date().getTime();
  }
}
