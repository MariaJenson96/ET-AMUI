import { Component, Input, OnInit } from '@angular/core';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatCardModule} from '@angular/material/card';
import { MatChipsModule} from '@angular/material/chips';
import { CurrencyPipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../interface/transaction';
import { CommonService } from '../../services/common.service';

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

  @Input()lisOfTransactions:Transaction[] = []; 

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

}
