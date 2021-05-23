import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { AddProductDto } from './dto/add-product';
import { JwtGuard } from '../auth/quards/jwt.guard';

@UseGuards(JwtGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.findAll();
  }
  @Get('particular')
  getParticularProduct(
    @Query('type') type?: string,
    @Query('name') name?: string,
    @Query('id') productId?: number,
    @Query('user') userId?: number,
  ) {
    return this.productsService.findParticular({
      type,
      productId,
      userId,
      name,
    });
  }

  @Post()
  addProduct(@Body() addProductDto: AddProductDto) {
    return this.productsService.addProduct(addProductDto);
  }

  @Delete()
  deleteProduct(
    @Query('user-id') userId: number,
    @Query('product-id') productId: number,
  ) {
    return this.productsService.deleteProductById(userId, productId);
  }
}
