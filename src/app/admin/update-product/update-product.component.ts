import { Component, OnInit } from '@angular/core';
import { HeaderAdminComponent } from "../../shared/components/header-admin/header-admin.component";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ButtonEffectDirective } from '../../shared/directives/button-effect.directive';
import { MyServiceService } from '../../core/services/my-service.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CardEditComponent } from "../../shared/components/card-edit/card-edit.component";
import { Product } from '../../core/models/Product';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [HeaderAdminComponent, SweetAlert2Module, ButtonEffectDirective, ReactiveFormsModule, CommonModule, CardEditComponent],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent implements OnInit{
  products: Product[] = [];
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
      cost: [0],
      amount: [0],
      brand: ['']
    })
  }


  ngOnInit(): void {
    this.myS.getData().subscribe(
      data => {
        this.products = data;
      }
    )
  }

  update($event: {product: Product; name: string; brand: string}): void {
    console.log($event)
    this.myS.putProduct($event.name, $event.brand, $event.product).subscribe(
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
