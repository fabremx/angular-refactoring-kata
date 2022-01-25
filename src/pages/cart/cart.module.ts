import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { CartComponent } from './cart.component';
import { ProductsService } from 'src/business/products/products.service';
import { ProductRowComponent } from 'src/components/product-row/product-row.component';
import { ProductTableComponent } from 'src/components/product-table/product-table.component';
import { CommonModule } from '@angular/common';
import { CommonProductComponent } from 'src/components/common-product/common-product.component';
import { NewProductComponent } from 'src/components/new-product/new-product.component';
import { EndedProductComponent } from 'src/components/ended-product/ended-product.component';

@NgModule({
  declarations: [
    CartComponent,
    ProductTableComponent,
    ProductRowComponent,
    CommonProductComponent,
    NewProductComponent,
    EndedProductComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [CartComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CartModule { }
