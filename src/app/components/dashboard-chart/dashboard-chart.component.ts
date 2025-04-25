import { Component, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatCardModule} from '@angular/material/card';
import { MatChipsModule} from '@angular/material/chips';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard-chart',
  imports: [
    MatChipsModule,
    MatCardModule,
    MatProgressBarModule,
    MatGridListModule,
    NgApexchartsModule
  ],
  templateUrl: './dashboard-chart.component.html',
  styleUrl: './dashboard-chart.component.scss'
})
export class DashboardChartComponent implements OnInit {
  listOfExpenses: any = [
    {id: 1, expenses: "Housing", colors: 'rgb(255, 69, 96)', value: 10},
    {id: 2, expenses: "Transportation", colors: 'rgb(254, 176, 25)', value: 10},
    {id: 3, expenses: "Living Expenses", colors: 'rgb(238, 130, 238)', value: 10},
    {id: 4, expenses: "Health", colors: 'rgb(70, 130, 180)', value: 10},
    {id: 5, expenses: "Education", colors: 'rgb(144, 238, 144)', value: 10},
    {id: 6, expenses: "Financial", colors: 'rgb(255, 165, 0)', value: 10},
    {id: 7, expenses: "Entertainment", colors: 'rgb(255, 105, 180)', value: 20},
    {id: 8, expenses: "Others", colors: 'rgb(255, 99, 71)', value: 20}
  ];
  
  listOfChartLabel: string[] = [];
  listOfChartColors: string[] = [];
  listOfValues: number[] = []

  ngOnInit(): void {
    this.listOfChartLabel = this.listOfExpenses.map((e: any)=> e.expenses);
    this.listOfChartColors = this.listOfExpenses.map((e: any)=> e.colors);
    this.listOfValues = this.listOfExpenses.map((e: any)=> e.value);
  }
}
