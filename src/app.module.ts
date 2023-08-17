import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YasuoController } from './yasuo/yasuo.controller';
import { YasuoService } from './yasuo/yasuo.service';

@Module({
  imports: [],
  controllers: [AppController, YasuoController],
  providers: [AppService, YasuoService],
})
export class AppModule {}
