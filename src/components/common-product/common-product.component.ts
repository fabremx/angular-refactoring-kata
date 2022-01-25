import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-common-product',
  templateUrl: './common-product.component.html',
  styleUrls: ['./common-product.component.scss']
})
export class CommonProductComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
