import { CurrencyEnum } from './currency.enum';

export interface ProductsCurrency {
  baseCurrency: string;
  currency: CurrencyEnum;
  worth: number;
}
