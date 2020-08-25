import { Module } from '@nestjs/common';
import { TrainerController } from './controller/trainer.controller';
import { TrainerService } from './service/trainer.service';

@Module({
  controllers: [TrainerController],
  providers: [TrainerService],
  exports: [TrainerService],
})
export class TrainerModule {}
