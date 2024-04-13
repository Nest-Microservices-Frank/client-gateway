import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  constructor() {}

  @Post()
  createProducts() {
    return 'Create a product';
  }

  @Get()
  findAllProducts() {
    return 'Return all products';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Return product with id ${id}`;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return `Delete product with id ${id}`;
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() body: any) {
    console.log(body);
    return `Update product with id ${id}`;
  }
}
