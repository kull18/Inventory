import { Routes } from '@angular/router';
import { AdminModule } from './admin/admin/admin.module';

export const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin/admin.module').then (a => a.AdminModule), 
    }
];
