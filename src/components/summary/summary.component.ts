import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['../../assets/styles/styles.scss']
})
export class SummaryComponent implements OnInit {
  @Input() shouldPayFees: boolean = true;
  @Input() totalPrice: number = 0;
  @Input() totalAmountToPay: number = 0;

  constructor() { }

  ngOnInit(): void { }
}
