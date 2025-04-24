import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { CurrencyPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-dashboard-month-card',
  imports: [
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    CurrencyPipe,
    MatGridListModule
  ],
  templateUrl: './dashboard-month-card.component.html',
  styleUrl: './dashboard-month-card.component.scss'
})
export class DashboardMonthCardComponent {
  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;
}
