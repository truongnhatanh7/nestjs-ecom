import { Test, TestingModule } from '@nestjs/testing';
import { YasuoService } from './yasuo.service';

describe('YasuoService', () => {
  let service: YasuoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YasuoService],
    }).compile();

    service = module.get<YasuoService>(YasuoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
