import { Module } from '@nestjs/common';
import { YasuoController } from './yasuo.controller';
import { YasuoService } from './yasuo.service';

@Module({
  controllers: [YasuoController],
  providers: [YasuoService],
})
export class YasuoModule {}
