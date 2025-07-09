import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBriefComponent } from './product-brief.component';

describe('ProductBriefComponent', () => {
  let component: ProductBriefComponent;
  let fixture: ComponentFixture<ProductBriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductBriefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
