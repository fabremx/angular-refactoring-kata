import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
