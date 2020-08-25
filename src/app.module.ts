import { Module } from '@nestjs/common';
import { TrainerModule } from './trainer/trainer.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [TrainerModule, ClientModule],
})
export class AppModule {}
