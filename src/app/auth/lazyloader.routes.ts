import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { DashboardCrmComponent } from '../dashboard-crm/dashboard-crm.component';
import { ResponsiveTableComponent } from '../tables/responsive-table/responsive-table.component';

export const appRoutes: Routes = [{
    path: '', component: AuthComponent, children: [
      { path: 'tables', component: ResponsiveTableComponent },
      { path: 'dashboard', component: DashboardCrmComponent },
    ]
}];
