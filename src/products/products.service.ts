import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from './models/products';
import { AddProductDto } from './dto/add-product';
import { CurrencyProvider } from './providers/currency';
import { ProductsQuery } from './models/products.query';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products')
    private readonly productsModel: Model<Products>,
    private readonly currencyProvider: CurrencyProvider,
  ) {}

  async findAll() {
    return this.productsModel.find().exec();
  }

  async findParticular(reqQuery: ProductsQuery) {
    if (reqQuery) {
      const dbQuery = {};
      Object.keys(reqQuery).forEach(key => {
        if (reqQuery[key]) dbQuery[key] = reqQuery[key];
      });
      return this.productsModel.find(dbQuery).exec();
    }
    return {
      message:
        'one of the query parameters ( type?: string; user?: string; id?: number, name?: string ) is required',
    };
  }

  async addProduct(addProductDto: AddProductDto) {
    const products = await this.productsModel.find().exec();
    const isTheSameId = products.find(
      product => product.productsId === products.length,
    );
    await this.currencyProvider.updateCurrency(addProductDto.currency);

    const createProducts = new this.productsModel({
      productId: !isTheSameId ? products.length : products.length + 1,
      ...addProductDto,
      currency: this.currencyProvider.productsCurrency,
    });
    return createProducts.save();
  }

  async deleteProductById(userId?: number, productId?: number) {
    return productId
      ? this.productsModel.deleteMany({ productId }).exec()
      : this.productsModel.deleteMany({ userId }).exec();
  }
}
