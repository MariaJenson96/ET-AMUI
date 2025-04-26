import { Component, OnInit } from '@angular/core';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatCardModule} from '@angular/material/card';
import { MatChipsModule} from '@angular/material/chips';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recent-transaction',
  imports: [
    MatChipsModule,
    MatCardModule,
    MatProgressBarModule,
    CurrencyPipe,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './recent-transaction.component.html',
  styleUrl: './recent-transaction.component.scss'
})
export class RecentTransactionComponent implements OnInit{

  lisOfTransactions:any = [
    {id:1, name:"Grocerries", isIncome: false, icon:"work", iconName:"Housing", amount: 100, date:"22 Apr" },
    {id:2, name:"Travel", isIncome: false, icon:"directions_car", iconName:"Transportation", amount: 500, date:"15 Mar"},
    {id:3, name:"drink", isIncome: false, icon:"home_work", iconName:"Living", amount: 400, date:"10 Jan" },
    {id:4, name:"medicine", isIncome: false, icon:"local_hospital", iconName:"Health", amount: 250, date:"21 Sep" },
    {id:5, name:"Exam Fees", isIncome: false, icon:"school", iconName:"Education", amount: 140, date:"20 Feb" },
    {id:6, name:"Mutual Fund", isIncome: false, icon:"theaters", iconName:"Entertainment", amount: 250, date:"06 May" },
    {id:7, name:"salary", isIncome: true, icon:"business_center", iconName:"Freelance", amount: 90, date:"01 Dec" }    
  ];

  listOfExpenses: any = [
    {id: 1, expenses: "Housing", colors: 'rgb(255, 69, 96)', value: 10, icon:"home"},
    {id: 2, expenses: "Transportation", colors: 'rgb(254, 176, 25)', value: 10, icon:"directions_car"},
    {id: 3, expenses: "Living", colors: 'rgb(238, 130, 238)', value: 10, icon:"home_work"},
    {id: 4, expenses: "Health", colors: 'rgb(70, 130, 180)', value: 10, icon:"local_hospital"},
    {id: 5, expenses: "Education", colors: 'rgb(144, 238, 144)', value: 10, icon:"school"},
    {id: 6, expenses: "Financial", colors: 'rgb(255, 165, 0)', value: 10, icon:"account_balance"},
    {id: 7, expenses: "Entertainment", colors: 'rgb(255, 105, 180)', value: 20, icon:"theaters"},
    {id: 8, expenses: "Others", colors: 'rgb(255, 99, 71)', value: 20, icon:"more_horiz"}
  ];

  listOfIncome: any = [
    { id: 1, income: "Salary", icon:"work" },
    { id: 2, income: "Freelance", icon:"business_center" },
    { id: 3, income: "Business", icon:"storefront" },
    { id: 4, income: "Rental", icon:"home" },
    { id: 5, income: "Investment", icon:"attach_money" },
    { id: 6, income: "Bonuses", icon:"star" },
    { id: 7, income: "Pension", icon:"account_balance" },
    { id: 8, income: "Government", icon:"account_balance_wallet" },
    { id: 9, income: "Gifts", icon:"card_giftcard" },
    { id: 10, income: "Refunds", icon:"redeem" },
    { id: 11, income: "Royalties", icon:"account_tree" },
    { id: 12, income: "Other Income", icon:"more_horiz" }
  ];

  ngOnInit(): void {
    
  }

}
