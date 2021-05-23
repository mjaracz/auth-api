import * as mongoose from 'mongoose';

export const CurrencySchema = new mongoose.Schema({
  baseCurrency: String,
  currency: String,
  worth: Number,
});
