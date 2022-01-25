import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndedProductComponent } from './ended-product.component';

describe('EndedProductComponent', () => {
  let component: EndedProductComponent;
  let fixture: ComponentFixture<EndedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndedProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
