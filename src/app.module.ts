import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { YasuoModule } from './yasuo/yasuo.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [YasuoModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes({
      path: 'yasuo/find',
      method: RequestMethod.GET,
    });
  }
}
