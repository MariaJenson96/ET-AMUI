import { Component, OnInit } from '@angular/core';
import { AllTransactionComponent } from '../../components/all-transaction/all-transaction.component';
import { Transaction } from '../../interface/transaction';

@Component({
  selector: 'app-transaction',
  imports: [
    AllTransactionComponent
  ],
  templateUrl: './transaction.page.component.html',
  styleUrl: './transaction.page.component.scss'
})
export class TransactionPageComponent implements OnInit {

  recentTransaction:Transaction[] = [];

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
    }
  }
}
