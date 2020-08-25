import { Test, TestingModule } from '@nestjs/testing';
import { ClientAssignationController } from './client-assignation.controller';

describe('ClientAssignationController', () => {
  let controller: ClientAssignationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClientAssignationController],
    }).compile();

    controller = module.get<ClientAssignationController>(
      ClientAssignationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
