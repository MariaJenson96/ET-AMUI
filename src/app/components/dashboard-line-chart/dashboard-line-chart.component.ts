import { Component, Input, OnInit } from '@angular/core';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatCardModule} from '@angular/material/card';
import { MatChipsModule} from '@angular/material/chips';
import { ChartType, NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard-line-chart',
  imports: [
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    NgApexchartsModule
  ],
  templateUrl: './dashboard-line-chart.component.html',
  styleUrl: './dashboard-line-chart.component.scss'
})
export class DashboardLineChartComponent implements OnInit {

  @Input() listOfYears: string[] = [];
  @Input() income: number[] = [];
  @Input() expense: number[] = [];
  public Options: any;

  ngOnInit() {
    this.Options = {
      series: [
        {
          name: 'Income',
          data: this.income,
        },
        {
          name: 'Expense',
          data: this.expense,
        }
      ],
      chart: {
        type: 'line',
        height: 350
      },
      colors: ['rgba(40, 167, 69, 0.87)', 'rgba(220, 53, 69, 0.87)'],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        categories: this.listOfYears,
        labels: {
          rotate: -90
        }
      },
      title: {
        text: 'Spending Trend'
      }
    };
  } 
}
