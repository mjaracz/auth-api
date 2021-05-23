import { ProductsTypeEnum } from './products-type.enum';
import { ProductsCurrency } from './products-currency';
import { Document } from 'mongoose';

export class Products extends Document {
  readonly productsId: number;
  readonly name: string;
  readonly price: number;
  readonly quantity: number;
  readonly description: string;
  readonly currency: ProductsCurrency;
  readonly type: ProductsTypeEnum;
}
