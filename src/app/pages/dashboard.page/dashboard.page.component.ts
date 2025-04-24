import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-dashboard.page',
  imports: [
    MatTabsModule,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './dashboard.page.component.html',
  styleUrl: './dashboard.page.component.scss',
  schemas:[]
})
export class DashboardPageComponent {

}
