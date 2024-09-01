import { Test, TestingModule } from '@nestjs/testing';
import { PopulationController } from './population.controller';

describe('PopulationController', () => {
  let controller: PopulationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PopulationController],
    }).compile();

    controller = module.get<PopulationController>(PopulationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
