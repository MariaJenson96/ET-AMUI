import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMonthCardComponent } from './dashboard-month-card.component';

describe('DashboardMonthCardComponent', () => {
  let component: DashboardMonthCardComponent;
  let fixture: ComponentFixture<DashboardMonthCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMonthCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMonthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
