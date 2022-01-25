import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { CartComponent } from './cart.component';
import { ProductsService } from 'src/business/products/products.service';
import { ProductsComponent } from 'src/components/products/products.component';

@NgModule({
  declarations: [CartComponent, ProductsComponent],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [CartComponent]
})
export class CartModule { }
