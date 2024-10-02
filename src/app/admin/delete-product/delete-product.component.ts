import { Component } from '@angular/core';
import { HeaderAdminComponent } from "../../shared/components/header-admin/header-admin.component";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ButtonEffectDirective } from '../../shared/directives/button-effect.directive';
import { MyServiceService } from '../../core/services/my-service.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [HeaderAdminComponent, SweetAlert2Module, ReactiveFormsModule],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.scss'
})
export class DeleteProductComponent {
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
          title: 'Borrar producto',
          text: 'Se logro agregar el producto',
          icon: 'success'
        })
      }
    );
  }
}
