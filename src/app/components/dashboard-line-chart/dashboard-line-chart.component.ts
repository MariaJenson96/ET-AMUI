import { Component } from '@angular/core';
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
export class DashboardLineChartComponent {

  public chartOptions: {
    series: ApexAxisChartSeries;
    chart: ApexChart & { type: ChartType };
    colors: string[]; 
    xaxis: ApexXAxis;
    title: ApexTitleSubtitle;
    plotOptions: ApexPlotOptions;
  };

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Sales',
          data: [30, 40, 45, 50, 49, 60, 70, 0, 0, 0, 0, 0]
        }
      ],
      chart: {
        type: 'bar',
        height: 350
      },
      colors: ['#7611f7'],
      plotOptions: {
        bar: {
          horizontal: false // 👈 Add this
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        labels: {
          rotate: -90 // 👈 Now this will work
        }
      },
      title: {
        text: 'Spending Trend'
      }
    };
    
  }
}
