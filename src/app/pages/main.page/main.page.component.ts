import { Component, OnInit } from '@angular/core';
import { DashboardMonthCardComponent } from '../../components/dashboard-month-card/dashboard-month-card.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DashboardChartComponent } from '../../components/dashboard-chart/dashboard-chart.component';
import { DashboardLineChartComponent } from '../../components/dashboard-line-chart/dashboard-line-chart.component';
import { RecentTransactionComponent } from "../../components/recent-transaction/recent-transaction.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [
    DashboardMonthCardComponent,
    // DashboardChartComponent,
    DashboardLineChartComponent,
    MatToolbarModule,
    MatIconModule,
    CommonModule,
    DashboardLineChartComponent,
    RecentTransactionComponent
],
  templateUrl: './main.page.component.html',
  styleUrl: './main.page.component.scss'
})
export class MainPageComponent implements OnInit {
  income: number = 0;
  expense: number = 0;
  chartLabels: any = [];

  listOfIncome: any = [
    { id: 1, income: "Salary / Wages" },
    { id: 2, income: "Freelance / Contract Income" },
    { id: 3, income: "Business Income" },
    { id: 4, income: "Rental Income" },
    { id: 5, income: "Investment Income" },
    { id: 6, income: "Bonuses / Commissions" },
    { id: 7, income: "Pension / Retirement Income" },
    { id: 8, income: "Government Assistance" },
    { id: 9, income: "Gifts Received" },
    { id: 10, income: "Refunds / Rebates" },
    { id: 11, income: "Royalties" },
    { id: 12, income: "Other Income" }
  ];
  
  ngOnInit(): void {

  }
}
