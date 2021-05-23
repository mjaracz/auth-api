import { ProductsTypeEnum } from '../models/products-type.enum'
import { CurrencyEnum } from '../models/currency.enum'

export class AddProductDto {
  readonly userId: number
  readonly name: string
  readonly price: number
  readonly quantity: number
  readonly currency: CurrencyEnum
  readonly type: ProductsTypeEnum
}
