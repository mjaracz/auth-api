import { Injectable } from '@nestjs/common';
import { CurrencyEnum } from '../models/currency.enum';
import { ProductsCurrency } from '../models/products-currency';
import * as fetchModule from 'node-fetch';

@Injectable()
export class CurrencyProvider {
  productsCurrency: ProductsCurrency = {
    baseCurrency: 'PLN',
    currency: CurrencyEnum.EUR,
    worth: 0.2247999281,
  };
  async updateCurrency(currency: CurrencyEnum) {
    fetchModule('https://api.exchangeratesapi.io/latest?base=PLN')
      .then(res => res.json())
      .then(data => {
        const currencyValue = data.rates[currency];
        if (currencyValue)
          this.productsCurrency = {
            baseCurrency: 'PLN',
            currency,
            worth: currencyValue,
          };
      });
  }
}
