import { Module } from '@nestjs/common';
import { YasuoModule } from './yasuo/yasuo.module';

@Module({
  imports: [YasuoModule],
})
export class AppModule {}
