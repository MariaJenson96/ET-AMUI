import { Component, Input, OnInit, input } from '@angular/core';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatCardModule} from '@angular/material/card';
import { MatChipsModule} from '@angular/material/chips';
import { CurrencyPipe, JsonPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../interface/transaction';
import { CommonService } from '../../services/common.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-all-transaction',
  imports: [
    MatChipsModule,
    MatCardModule,
    MatProgressBarModule,
    CurrencyPipe,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './all-transaction.component.html',
  styleUrl: './all-transaction.component.scss'
})
export class AllTransactionComponent {
  @Input()lisOfTransactions:Transaction[] = []; 
  @Input() title: string = "";

  constructor(private c: CommonService){}
  
  getIcon(type:number, category:number){
    if(type == 1){
      const matched = this.c.getIncome().find(e => e.id === category);
      return matched?.icon
    }
    else{
      const matched = this.c.getExpense().find(e => e.id === category);
      return matched?.icon;
    }
  }
  getName(type:number, category:number){
    if(type == 1){
      const matched = this.c.getIncome().find(e => e.id === category);
      return matched?.value;
    }
    else{
      const matched = this.c.getExpense().find(e => e.id === category);
      return matched?.value;
    }
  }

  ngOnInit(): void {
    
  }

  onDelete(id:number){
    let arrayOfTransaction: Transaction[] = JSON.parse(localStorage.getItem("TransactionDetails") || '[]')
    if(arrayOfTransaction.length > 0) {
      this.lisOfTransactions = arrayOfTransaction.filter(e=> e.id !== id);
      localStorage.setItem("TransactionDetails", JSON.stringify(this.lisOfTransactions))
    }
  }
}
