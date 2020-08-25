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

  deleteTrainer(id: number) {
    const index = this.trainerList.findIndex(trainer => {
      trainer.id === id;
    });
    if (index !== null) {
      this.trainerList.splice(index, 1);
    }
  }

  private dynamicId() {
    return new Date().getTime();
  }
}
