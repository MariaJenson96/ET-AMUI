import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MainPageComponent } from "../../pages/main.page/main.page.component";
import { AddPagesComponent } from '../../pages/add.pages/add.pages.component';
import { TransactionPageComponent } from '../../pages/transaction.page/transaction.page.component';

@Component({
  selector: 'app-layout',
  imports: [
    MatTabsModule,
    MatIconModule,
    CommonModule,
    MatToolbarModule,
    MainPageComponent,
    AddPagesComponent,
    TransactionPageComponent
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {

  title = 'Dashboard';
  @ViewChild(MainPageComponent) dashboard! : MainPageComponent;

  constructor(private router:Router){}
  ngOnInit(): void {
    // let val = JSON.parse(localStorage.getItem("TransactionDetails") || '[]')
    // if(val !== '[]' && val.length > 0)
  }

  listTabs = [
    { label: 'Dashboard', icon: 'home', component: 'main' },
    { label: 'New', icon: 'add_circle', component: 'add' },
    { label: 'Transactions', icon: 'compare_arrows', component: 'transaction' }    
    // { label: 'Budget', icon: 'account_balance' },
    // { label: 'Setting', icon: 'settings' }
  ];
  navigation(path:string){
    this.router.navigate([`dashboard/${path}`]);
  }
  onTabChange(index: number) {
    const selectedTab = this.listTabs[index];
    this.title = selectedTab.label;

    if(this.title === "Dashboard") this.dashboard.ngOnInit();
  }
}
