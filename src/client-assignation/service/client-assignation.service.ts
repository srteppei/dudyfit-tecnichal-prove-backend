import { Injectable } from '@nestjs/common';
import { ClientService } from '../../client/service/client.service';
import { TrainerService } from '../../trainer/service/trainer.service';
import { Client } from '../../client/domain/client';
import { ClientAssignation } from '../domain/client-assignation';

@Injectable()
export class ClientAssignationService {
  constructor(
    private clientService: ClientService,
    private trainerService: TrainerService,
  ) {}

  assignateClient() {
    const clientAssignationList: ClientAssignation[] = [];
    const clientsWithoutTrainer: Client[] = [];
    const trainerList = this.trainerService.getAllTrainer();

    trainerList.forEach(trainer => {
      clientAssignationList.push(new ClientAssignation(trainer));
    });

    this.clientService
      .getAllClients()
      .sort((client1, client2) => {
        return client2.trainerReputation - client1.trainerReputation;
      })
      .forEach(client => {
        let isClientAdded = false;
        for (let clientAssignation of clientAssignationList) {
          const trainer = clientAssignation.trainer;
          const clientList = clientAssignation.clientList;
          if (trainer.availablePlaces > clientList.length) {
            isClientAdded = true;
            clientList.push(client);
            break;
          }
        }
        if (!isClientAdded) {
          clientsWithoutTrainer.push(client);
        }
      });

    if (clientsWithoutTrainer.length > 0) {
      clientAssignationList.push(
        new ClientAssignation(null, clientsWithoutTrainer),
      );
    }

    return clientAssignationList;
  }
}
