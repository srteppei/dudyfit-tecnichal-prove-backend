import { Module } from '@nestjs/common';
import { ClientAssignationController } from './controller/client-assignation.controller';

@Module({
  controllers: [ClientAssignationController],
})
export class ClientAssignationModule {}
