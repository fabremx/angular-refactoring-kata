import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { CartPageComponent } from './cartPage.component';
import { ProductsComponent } from '../products/products.component';
import { SummaryComponent } from '../summary/summary.component';

@NgModule({
  declarations: [CartPageComponent, ProductsComponent, SummaryComponent],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  bootstrap: [CartPageComponent]
})
export class CartModule { }
