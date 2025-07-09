import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillPopupComponent } from './bill-popup.component';

describe('BillPopupComponent', () => {
  let component: BillPopupComponent;
  let fixture: ComponentFixture<BillPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BillPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
