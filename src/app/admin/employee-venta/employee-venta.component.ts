import { Component, OnInit } from '@angular/core';
import { HeaderAdminComponent } from '../../shared/components/header-admin/header-admin.component';
import { CardVentaComponent } from "../../shared/components/card-venta/card-venta.component";
import { Product } from '../../core/models/Product';
import { NgFor } from '@angular/common';
import { MyServiceService } from '../../core/services/my-service.service';

@Component({
  selector: 'app-employee-venta',
  standalone: true,
  imports: [HeaderAdminComponent, CardVentaComponent, NgFor],
  templateUrl: './employee-venta.component.html',
  styleUrls: ['./employee-venta.component.scss'] 
})
export class EmployeeVentaComponent implements OnInit {
  products: Product[] = [];
  soldProducts: Product[] = [];
  amountTotal: number = 0; 

  constructor(private myService: MyServiceService) {}

  ngOnInit(): void {
    this.myService.getData().subscribe(
      data => {
        this.products = data;
      }
    );
  }

  handleProductAdded(productId: number): void {
    const product = this.products.find(element => element.id_product === productId);
    if (product) {
      this.soldProducts.push(product); 
      this.amountTotal += product.cost; 
      console.log(this.amountTotal);
    }
  }

  generate(): void {
  }
}
