import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../../shared/components/header-admin/header-admin.component";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ButtonEffectDirective } from '../../shared/directives/button-effect.directive';
import { MyServiceService } from '../../core/services/my-service.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [HeaderAdminComponent, SweetAlert2Module, ButtonEffectDirective, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  myFormAdd: FormGroup;
  constructor(private fm: FormBuilder,private myS: MyServiceService) {
    this.myFormAdd = this.fm.group({
      name: ['', [Validators.minLength(2)]],
      amount: [],
      cost: [],
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
