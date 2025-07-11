import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavFilterComponent } from './nav-filter.component';

describe('NavFilterComponent', () => {
  let component: NavFilterComponent;
  let fixture: ComponentFixture<NavFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
