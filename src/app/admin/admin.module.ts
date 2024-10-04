import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { UpdateProductComponent } from './update-product/update-product.component';
import { SearchComponent } from './search/search.component';
import { HomeEmployeeComponent } from '../auth/home-employee/home-employee.component';
import { LoginComponent } from '../auth/login/login.component';
import { HomeComponent } from '../auth/home/home.component';
import { EmployeeVentaComponent } from './employee-venta/employee-venta.component';

const Routes: Route[] = [
  {
    path: 'add',
    component: AddProductComponent
  },
  {
    path: 'delete',
    component: DeleteProductComponent
  },
  {
    path: 'update',
    component: UpdateProductComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'home-employee',
    component: HomeEmployeeComponent
  },
  {
    path: 'venta',
    component: EmployeeVentaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',  
    redirectTo: 'add',  
    pathMatch: 'full'   
  }
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    SweetAlert2Module.forChild(),
    CommonModule,
    RouterModule.forChild(Routes)
  ],
  exports: [RouterModule]
})
export class AdminModule { }
