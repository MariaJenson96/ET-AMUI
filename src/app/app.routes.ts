import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboard.page/dashboard.page.component';
import { MainPageComponent } from './pages/main.page/main.page.component';

export const routes: Routes = [
    {path:'', redirectTo:'dashboard', pathMatch:'full'},
    {path:'dashboard', component:DashboardPageComponent, children:[
        {path:'', component:MainPageComponent}
    ]}
];
