import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard.page',
  imports: [
    MatTabsModule,
    RouterOutlet,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './dashboard.page.component.html',
  styleUrl: './dashboard.page.component.scss',
  schemas:[]
})
export class DashboardPageComponent {

  listTabs: any = [
    {icon:'home', title:'Dashboard'},
    {icon:'compare_arrows', title:'Transaction'},
    // {icon:'add_circle', title:'New'},
    {icon:'account_balance', title:'Budget'},
    {icon:'settings', title:'Setting'}
  ]

}
