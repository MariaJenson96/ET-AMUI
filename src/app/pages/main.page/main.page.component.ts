import { Component, OnInit } from '@angular/core';
import { DashboardMonthCardComponent } from '../../components/dashboard-month-card/dashboard-month-card.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DashboardChartComponent } from '../../components/dashboard-chart/dashboard-chart.component';
import { DashboardLineChartComponent } from '../../components/dashboard-line-chart/dashboard-line-chart.component';
import { RecentTransactionComponent } from "../../components/recent-transaction/recent-transaction.component";
import { CommonModule } from '@angular/common';
import { Transaction } from '../../interface/transaction';

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
  recentTransaction:Transaction[] = [];
  monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  IncomeMonthlyTotals: number[] = Array(12).fill(0);
  ExpenseMonthlyTotals: number[] = Array(12).fill(0);

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

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
      
    let arrayOfTransaction: Transaction[] = JSON.parse(localStorage.getItem("TransactionDetails") || '[]')
    if(arrayOfTransaction.length > 0) {
      this.recentTransaction = arrayOfTransaction.filter(t => {
        const transactionDate = new Date(t.date);
        return (
          transactionDate.getMonth() === currentMonth &&
          transactionDate.getFullYear() === currentYear
        );
      });
        this.income = this.recentTransaction
                          .filter(t => t.type == 1)
                          .reduce((sum, t) => sum + t.amount, 0);

      this.expense = this.recentTransaction
        .filter(t => t.type == 2)
        .reduce((sum, t) => sum + t.amount, 0);

        arrayOfTransaction.forEach(t => {
          const date = new Date(t.date);
          const year = date.getFullYear();
          const month = date.getMonth();
        
          if (year === currentYear && t.type == 1) {
            this.IncomeMonthlyTotals[month] += t.amount;
          }
          else if(year === currentYear && t.type == 2){
            this.ExpenseMonthlyTotals[month] += t.amount;
          }
        });
        console.log(this.IncomeMonthlyTotals);
        console.log(this.ExpenseMonthlyTotals);
    }
  }
}
