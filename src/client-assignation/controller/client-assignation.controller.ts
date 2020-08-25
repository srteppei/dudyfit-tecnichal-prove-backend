import { Controller, Get } from '@nestjs/common';
import { ClientAssignationService } from '../service/client-assignation.service';

@Controller('client-assignation')
export class ClientAssignationController {
  constructor(private clientAssignationService: ClientAssignationService) {}

  @Get()
  getClientAssignation() {
    const result = this.clientAssignationService.assignateClient();
    return result;
  }
}
