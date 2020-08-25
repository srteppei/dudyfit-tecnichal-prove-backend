import { Controller, Post, Body } from '@nestjs/common';
import { Trainer } from '../domain/trainer';
import { TrainerService } from '../service/trainer.service';

@Controller('trainer')
export class TrainerController {
  constructor(private trainerService: TrainerService) {}

  @Post()
  createTrainer(@Body() trainerDto: Trainer): Trainer {
    return this.trainerService.createTrainer(trainerDto);
  }
}
