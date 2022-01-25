import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProductsService } from 'src/business/products/products.service';
import { Product } from 'src/models/product';

interface MappingKeyTemplate {
  key: string;
  templateName: TemplateRef<HTMLElement>;
}

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product | undefined;

  @ViewChild('commonProductTemplate', { static: true })
  commonProductTemplate: TemplateRef<HTMLElement> | null = null;
  @ViewChild('newProductTemplate', { static: true })
  newProductTemplate: TemplateRef<HTMLElement> | null = null;
  @ViewChild('endedProductTemplate', { static: true })
  endedProductTemplate: TemplateRef<HTMLElement> | null = null;

  mappingKeyTemplate: MappingKeyTemplate[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.mappingKeyTemplate = [
      {
        key: "isNew",
        templateName: this.newProductTemplate as TemplateRef<HTMLElement>
      },
      {
        key: "isSoonEnding",
        templateName: this.endedProductTemplate as TemplateRef<HTMLElement>,
      },
    ];
  }

  calculProductTotalPrice(product: Product | undefined): number {
    return this.productsService.calculProductTotalPrice(product)
  }

  getTemplate(product: Product | undefined): TemplateRef<HTMLElement> | null {
    if (!product) return null;

    const template:
      | TemplateRef<HTMLElement>
      | undefined = this.mappingKeyTemplate.find(
        (mapping: MappingKeyTemplate) => product[mapping.key]
      )?.templateName;

    return template || this.commonProductTemplate;
  }
}
