import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/store'),
    ProductModule,
    UserModule,
    AuthModule,
    CartModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
