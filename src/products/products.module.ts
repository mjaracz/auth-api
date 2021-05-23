import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsSchema } from './schema/products';
import { CurrencyProvider } from './providers/currency';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Products', schema: ProductsSchema, collection: 'Products' },
    ]),
  ],
  providers: [ProductsService, CurrencyProvider],
  controllers: [ProductsController],
})
export class ProductsModule {}
