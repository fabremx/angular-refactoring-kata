import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendProductsData, Product } from 'src/models';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cartPage.component.html',
  styleUrls: ['../../assets/styles/styles.scss']
})
export class CartPageComponent implements OnInit {
  @Input() shouldPayFees: boolean = true;
  products: Product[] = [];
  totalPrice: number = 0;
  totalAmountToPay: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchProducts().subscribe((result: BackendProductsData) => {
      this.products = result.products;

      this.calculTotalPrice();
      this.calculAmountToPay();
    })
  }

  fetchProducts(): Observable<BackendProductsData> {
    return this.http.get<BackendProductsData>('../../assets/data/products.json')
  }

  removeProduct(idToRemove: number) {
    const newProducts: Product[] = [];

    for (let i: number = 0; i < this.products.length; i++) {
      if (this.products[i].id !== idToRemove) {
        newProducts.push(this.products[i]);
      }
    }

    this.products = newProducts;
  };

  calculTotalPrice(): void {
    let price: number = 0;

    for (let i: number = 0; i < this.products.length; i++) {
      price += this.products[i].price;
    }

    this.totalPrice = price;
  };

  calculAmountToPay(): void {
    let price: number = 0;

    for (let i: number = 0; i < this.products.length; i++) {
      price += this.products[i].price;
    }

    if (this.shouldPayFees) {
      price += 3.99;
    }

    this.totalAmountToPay = price;
  };
}
