import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../../shared/components/header-admin/header-admin.component";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ButtonEffectDirective } from '../../shared/directives/button-effect.directive';
import { MyServiceService } from '../../core/services/my-service.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [HeaderAdminComponent, SweetAlert2Module, ButtonEffectDirective, ReactiveFormsModule, CommonModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent {
  complete: boolean = false;
  myFormAdd: FormGroup;
  constructor(private fm: FormBuilder,private myS: MyServiceService) {
    this.myFormAdd = this.fm.group({
      name: [''],
      cost: [0],
      brand: ['']
    })
  }

  addProduct(): void {
    this.myS.postProduct(this.myFormAdd.value).subscribe(
      data => {
        Swal.fire({
          title: 'Agregar producto',
          text: 'Se logro agregar el producto',
          icon: 'success'
        })
      },
      error => {
        Swal.fire({
          title: 'Agregar producto',
          text: 'No se logro agregar',
          icon:'error'
        })
      }
    );
  }
}
