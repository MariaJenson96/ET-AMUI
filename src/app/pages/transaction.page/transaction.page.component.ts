import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { MainPageComponent } from "../main.page/main.page.component";

@Component({
  selector: 'app-transaction.page',
  imports: [MatTabsModule],
  templateUrl: './transaction.page.component.html',
  styleUrl: './transaction.page.component.scss'
})
export class TransactionPageComponent {

}
