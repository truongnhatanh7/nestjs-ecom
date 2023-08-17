import { Test, TestingModule } from '@nestjs/testing';
import { YasuoController } from './yasuo.controller';

describe('YasuoController', () => {
  let controller: YasuoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YasuoController],
    }).compile();

    controller = module.get<YasuoController>(YasuoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
