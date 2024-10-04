import { Component, OnInit } from '@angular/core';
import { HeaderAdminComponent } from "../../shared/components/header-admin/header-admin.component";
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ButtonEffectDirective } from '../../shared/directives/button-effect.directive';
import { MyServiceService } from '../../core/services/my-service.service';
import Swal from 'sweetalert2';
import { NgFor } from '@angular/common';
import { Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../core/models/Product';
import { CardViewComponent } from "../../shared/components/card-view/card-view.component";
import { ProductCardSearchComponent } from "../../shared/components/product-card-search/product-card-search.component";
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [HeaderAdminComponent, ReactiveFormsModule, CardViewComponent, NgFor, ProductCardSearchComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  myFormAdd: FormGroup;
  founded: Product[] = [];

  constructor(private fm: FormBuilder, private myS: MyServiceService) {
    this.myFormAdd = this.fm.group({
      name: [''],
      brand: ['']
    })
  }

  find(): void {
    const form = this.myFormAdd.value;
    this.myS.findByNameBrand(form.name, form.brand).subscribe(
      find => {
        this.founded.push(find);
        console.log(find)
      },
      error => {
        Swal.fire({
          title: "Buscar",
          text: "No se logro encontrar",
          icon: "error"
        })
      }
    )
  }
}
