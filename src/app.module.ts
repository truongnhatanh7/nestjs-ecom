import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { YasuoModule } from './yasuo/yasuo.module';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { YasuoController } from './yasuo/yasuo.controller';

@Module({
  imports: [YasuoModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(YasuoController);
  }
}
