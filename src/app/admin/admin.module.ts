import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { UpdateProductComponent } from './update-product/update-product.component';

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
