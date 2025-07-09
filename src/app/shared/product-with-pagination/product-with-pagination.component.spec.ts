import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductWithPaginationComponent } from './product-with-pagination.component';

describe('ProductWithPaginationComponent', () => {
  let component: ProductWithPaginationComponent;
  let fixture: ComponentFixture<ProductWithPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductWithPaginationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductWithPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
