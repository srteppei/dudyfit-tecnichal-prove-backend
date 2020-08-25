import { Module } from '@nestjs/common';
import { ClientAssignationController } from './controller/client-assignation.controller';
import { ClientAssignationService } from './service/client-assignation.service';
import { TrainerModule } from '../trainer/trainer.module';
import { ClientModule } from '../client/client.module';

@Module({
  imports: [TrainerModule, ClientModule],
  controllers: [ClientAssignationController],
  providers: [ClientAssignationService],
})
export class ClientAssignationModule {}
