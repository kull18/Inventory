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
  nameBoolean: string = '';
  brandBoolean: string = '';
  myFormAdd: FormGroup;
  myFormSearch: FormGroup;

  constructor(private fm: FormBuilder, private myS: MyServiceService, private newFm: FormBuilder) {
    this.myFormSearch = this.newFm.group({
      nameSearch: [''],
      brand: ['']
    })

    this.myFormAdd = this.fm.group({
      name: [''],
      cost: [],
      amount: [],
      brand: ['']
    })
  }

  search(): void {
    const nameObject = this.myFormSearch.value;


    this.myS.findByNameBrand(nameObject.nameSearch, nameObject.brand).subscribe(
      data => {
        this.nameBoolean = data.name;
        this.brandBoolean = data.brand;
        this.complete = !this.complete;
      },
      error => {
        Swal.fire({
          title: "Encontrar",
          text: "No se logro encontrar",
          icon: "error"
        })
      }
    )
  }

  update(): void {
    this.myS.putProduct(this.nameBoolean, this.brandBoolean, this.myFormAdd.value).subscribe(
      data => {
        this.complete = !this.complete;
        Swal.fire({
          title: "Actualizar",
          text: "Se logro actualizar",
          icon: "success"
        })
      },
      error => {
        this.complete = !this.complete;
      }
    )
  }
}
