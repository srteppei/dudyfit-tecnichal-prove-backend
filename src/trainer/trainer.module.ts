import { Module } from '@nestjs/common';
import { TrainerController } from './controller/trainer/trainer.controller';
import { TrainerService } from './service/trainer.service';

@Module({
  controllers: [TrainerController],
  providers: [TrainerService]
})
export class TrainerModule {}
