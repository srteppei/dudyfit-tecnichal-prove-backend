import { Module } from '@nestjs/common';
import { ClientAssignationController } from './controller/client-assignation.controller';
import { ClientAssignationService } from './service/client-assignation.service';

@Module({
  controllers: [ClientAssignationController],
  providers: [ClientAssignationService],
})
export class ClientAssignationModule {}
