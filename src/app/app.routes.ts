import { Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { HomeComponent } from './auth/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(a => a.AdminModule),
    }
];
