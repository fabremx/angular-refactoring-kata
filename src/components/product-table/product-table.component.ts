import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProductsService } from 'src/business/products/products.service';
import { BackendProductsData, Product } from 'src/models/product';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.fetchProducts().subscribe((data: BackendProductsData) => {
      this.products = data.products
    })
  }
}
