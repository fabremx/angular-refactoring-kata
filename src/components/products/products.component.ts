import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/business/products/products.service';
import { BackendProductsData, Product } from 'src/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.fetchProducts().subscribe((data: BackendProductsData) => {
      this.products = data.products
      console.log('loaded', this.products)
    })
  }
}
