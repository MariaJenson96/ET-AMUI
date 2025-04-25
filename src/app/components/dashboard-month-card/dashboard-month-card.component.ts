import { Component, Input} from '@angular/core';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatCardModule} from '@angular/material/card';
import { MatChipsModule} from '@angular/material/chips';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-dashboard-month-card',
  imports: [
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    CurrencyPipe
  ],
  templateUrl: './dashboard-month-card.component.html',
  styleUrl: './dashboard-month-card.component.scss'
})
export class DashboardMonthCardComponent {
  @Input() Income: number = 0;
  @Input() Expense: number = 0;
}
