import * as mongoose from 'mongoose';
import { CurrencySchema } from './products-currency';

export const ProductsSchema = new mongoose.Schema({
  productId: Number,
  userId: Number,
  name: String,
  price: Number,
  quantity: Number,
  description: String,
  currency: CurrencySchema,
  type: String,
});
