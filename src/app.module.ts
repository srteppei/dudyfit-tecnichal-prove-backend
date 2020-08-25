import { Module } from '@nestjs/common';
import { TrainerModule } from './trainer/trainer.module';
import { ClientModule } from './client/client.module';
import { ClientAssignationModule } from './client-assignation/client-assignation.module';

@Module({
  imports: [TrainerModule, ClientModule, ClientAssignationModule],
})
export class AppModule {}
