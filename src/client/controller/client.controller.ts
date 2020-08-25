import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  Put,
  Get,
} from '@nestjs/common';
import { ClientService } from '../service/client.service';
import { Client } from '../domain/client';

@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Post()
  createClient(@Body() clientDto: Client): Client {
    return this.clientService.createClient(clientDto);
  }

  @Delete(':id')
  deleteClient(@Param('id') id: Number) {
    this.clientService.deleteClient(id);
  }

  @Put()
  updateClient(@Body() clientDto: Client): Client {
    return this.clientService.updateClient(clientDto);
  }

  @Get('/all')
  getAllClients(): Client[] {
    return this.clientService.getAllClients();
  }
}
