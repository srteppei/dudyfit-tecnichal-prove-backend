import { Trainer } from '../../trainer/domain/trainer';
import { Client } from '../../client/domain/client';

export class ClientAssignation {
  constructor(public trainer: Trainer, public clientList: Client[] = []) {}
}
