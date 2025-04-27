import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatToolbarModule} from '@angular/material/toolbar';
import { DashboardChartComponent } from "../../components/dashboard-chart/dashboard-chart.component";
import { MainPageComponent } from "../../pages/main.page/main.page.component";
import { AddPagesComponent } from '../../pages/add.pages/add.pages.component';

@Component({
  selector: 'app-layout',
  imports: [
    MatTabsModule,
    MatIconModule,
    CommonModule,
    MatToolbarModule,
    MainPageComponent,
    AddPagesComponent
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

  title = 'Dashboard';

  constructor(private router:Router){}
  
  listTabs: any = [
    {icon:'', title:'', nav:''},
    {icon:'', title:'', nav:'transaction'},
    // {icon:'', title:''},
    {icon:'', title:'', nav:''},
    {icon:'', title:'', nav:''}
  ];
  navigation(path:string){
    this.router.navigate([`dashboard/${path}`]);
  }
  onTabChange(index: number) {
    const selectedTab = this.listTabs[index];
    this.title = selectedTab.title;
    this.navigation(selectedTab.nav);
  }
}
