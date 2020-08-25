import { Controller, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { Trainer } from '../domain/trainer';
import { TrainerService } from '../service/trainer.service';

@Controller('trainer')
export class TrainerController {
  constructor(private trainerService: TrainerService) {}

  @Post()
  createTrainer(@Body() trainerDto: Trainer): Trainer {
    return this.trainerService.createTrainer(trainerDto);
  }

  @Put()
  updateTrainer(@Body() trainerDto: Trainer): Trainer {
    return this.trainerService.updateTrainer(trainerDto);
  }

  @Delete(':id')
  deleteTrainer(@Param('id') id: number) {
    this.trainerService.deleteTrainer(id);
  }
}
