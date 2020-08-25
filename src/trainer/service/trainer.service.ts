import { Injectable } from '@nestjs/common';
import { Trainer } from '../domain/trainer';

@Injectable()
export class TrainerService {
  private trainerList: Trainer[] = [];

  createTrainer(trainer: Trainer) {
    trainer.id = this.dynamicId();
    this.trainerList.push(trainer);
    return trainer;
  }

  private dynamicId() {
    return new Date().getTime();
  }
}
