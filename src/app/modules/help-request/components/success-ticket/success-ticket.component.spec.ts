import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessTicketComponent } from './success-ticket.component';

describe('SuccessTicketComponent', () => {
  let component: SuccessTicketComponent;
  let fixture: ComponentFixture<SuccessTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessTicketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuccessTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
