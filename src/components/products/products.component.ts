import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['../../assets/styles/styles.scss']
})
export class ProductsComponent implements OnInit {
  @Input() products: Product[] = [];
  @Output() removeProductEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void { }

  removeProduct(productId: number) {
    this.removeProductEmitter.emit(productId);
  }
}
