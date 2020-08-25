import { Module } from '@nestjs/common';
import { TrainerController } from './controller/trainer/trainer.controller';

@Module({
  controllers: [TrainerController]
})
export class TrainerModule {}
