import { Test, TestingModule } from '@nestjs/testing';
import { ClientAssignationService } from './client-assignation.service';

describe('ClientAssignationService', () => {
  let service: ClientAssignationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientAssignationService],
    }).compile();

    service = module.get<ClientAssignationService>(ClientAssignationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
