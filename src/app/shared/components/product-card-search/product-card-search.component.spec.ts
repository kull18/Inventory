import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardSearchComponent } from './product-card-search.component';

describe('ProductCardSearchComponent', () => {
  let component: ProductCardSearchComponent;
  let fixture: ComponentFixture<ProductCardSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
