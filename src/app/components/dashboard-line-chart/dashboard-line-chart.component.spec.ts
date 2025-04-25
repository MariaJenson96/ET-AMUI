import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLineChartComponent } from './dashboard-line-chart.component';

describe('DashboardLineChartComponent', () => {
  let component: DashboardLineChartComponent;
  let fixture: ComponentFixture<DashboardLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardLineChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
