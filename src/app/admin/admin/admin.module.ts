import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterLink, RouterModule } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';
import { routes } from '../../app.routes';

//admin operations 

const Routes: Route[] = [
  {
    path: 'add',
    component: AddProductComponent
  }
] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes)
  ],
  exports: [RouterModule]
})
export class AdminModule { }
