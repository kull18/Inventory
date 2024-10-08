import { Component, OnInit } from '@angular/core';
import { HeaderAdminComponent } from "../../shared/components/header-admin/header-admin.component";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ButtonEffectDirective } from '../../shared/directives/button-effect.directive';
import { MyServiceService } from '../../core/services/my-service.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Pedido } from '../../core/models/Pedido';
import { Product } from '../../core/models/Product';
@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [HeaderAdminComponent, SweetAlert2Module, ReactiveFormsModule],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.scss'
})
export class DeleteProductComponent  {
  myFormAdd: FormGroup;
  constructor(private fm: FormBuilder, private myS: MyServiceService) {
    this.myFormAdd = this.fm.group({
      name: [''],
      brand: ['']
    })
  }
  addProduct(): void {
    const myForm = this.myFormAdd.value;
    console.log(myForm)

    this.myS.deleteProduct(myForm.name, myForm.brand).subscribe(
      data => {
        Swal.fire({
          title: 'Borrar producto',
          text: 'Se logro agregar el producto',
          icon: 'success'
        })
      },
      error => {
        Swal.fire({
          title: "Eliminar",
          text: "No se logro eliminar",
          icon: "warning"
        })
      }
    );
  }
}
