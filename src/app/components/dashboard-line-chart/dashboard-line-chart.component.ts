import { Component } from '@angular/core';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatCardModule} from '@angular/material/card';
import { MatChipsModule} from '@angular/material/chips';
import { NgApexchartsModule } from 'ng-apexcharts';

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
export class DashboardLineChartComponent {

  chartOptions: any;

  constructor() {

    this.chartOptions = {
      series: [
        {
          name: 'Sales',
          data: [
            { x: 'Jan', y: 1000 },
            { x: 'Feb', y: 2000 },
            { x: 'Mar', y: 3000 },
            { x: 'Apr', y: 4000 },
            { x: 'May', y: 5000 },
            { x: 'Jun', y: 6000 },
            { x: 'Jul', y: 7000 },
            { x: 'Aug', y: 8000 },
            { x: 'Sep', y: 9000 }
          ]
        }
      ],
      chart: {
        type: 'area',
        height: 350,
        zoom: { enabled: false }
      },
      dataLabels: { enabled: false },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      title: { text: 'Spending Trend (Mountain Chart)', align: 'left' },
      grid: {
        row: { colors: ['#f3f3f3', 'transparent'], opacity: 0.5 }
      },
      xaxis: {
        type: 'category',
        categories: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep']
      },
      yaxis: { title: { text: 'Amounts' } }
    };
  }
}
