import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-ended-product',
  templateUrl: './ended-product.component.html',
  styleUrls: ['./ended-product.component.scss']
})
export class EndedProductComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
