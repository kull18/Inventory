import { Component, OnInit } from '@angular/core';
import { HeaderAdminComponent } from '../../shared/components/header-admin/header-admin.component';
import { CardVentaComponent } from "../../shared/components/card-venta/card-venta.component";
import { Product } from '../../core/models/Product';
import { NgFor } from '@angular/common';
import { MyServiceService } from '../../core/services/my-service.service';
import Swal from 'sweetalert2';
import { Pedido } from '../../core/models/Pedido';
import { AmountPedido } from '../../core/models/AmountPedido';

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
  pedido: Pedido = {
    "state": "Active",
    "relations": []
  }
  amountPedido: AmountPedido[] = []
  amountTotal: number = 0;

  constructor(private myService: MyServiceService) { }

  ngOnInit(): void {
    this.myService.getData().subscribe(
      data => {
        this.products = data;
      }
    );
  }

  handleProductAdded(productId: number): Pedido {
    let productFound = false;
    for (let i = 0; i < this.pedido.relations.length; i++) {
      if (this.pedido.relations[i].id_product === productId) {
        console.log("pedido")
        this.pedido.relations[i].amount += 1;
        productFound = true;
        console.log(this.pedido.relations)
        break;
      }
    }
    let flag = false;
    for (let index = 0; index < this.amountPedido.length; index++) {
      if (this.amountPedido[index].id_product === productId) {
        console.log("agrear")
        console.log(this.amountPedido)
        this.amountPedido[index].amount += 1;
        flag = true;
        break;
      }
    }

    if (!productFound) {
      console.log("agregado")
      this.pedido.relations.push({
        id_product: productId,
        amount: 1
      });
    }

    if (!flag) {
      console.log("agregardo")
      this.amountPedido.push({
        id_product: productId,
        amount: 1
      })
    }


    const product = this.products.find(p => p.id_product === productId);
    if (product) {
      this.amountTotal += product.cost;
    }
    return this.pedido;
  }

  handleProductDelte(productIdNumber: number): void {
    let flag = false;
    let index: number = 0;

    const product = this.products.find(p => p.id_product === productIdNumber);


    if (product) {
      if (this.amountTotal > 0) {
        this.amountTotal -= product.cost;
      } else {
        Swal.fire({
          title: "Reducir producto",
          text: "ya no hay productos añadidos",
          icon: "warning"
        })
      }
    }


    for (let indexFinded = 0; indexFinded < this.pedido.relations.length; indexFinded++) {
      if (this.pedido.relations[indexFinded].id_product === productIdNumber) {
        flag = true;
        index = indexFinded;
        break;
      }
    };
    if (flag) {
      this.pedido.relations.splice(index, 1)
      this.amountPedido.splice(index, 1)
    }
  }


  generate(): void {
    if (this.pedido.relations.length === 0) {
      Swal.fire({
        title: "Generar pedido",
        text: "No hay productos seleccionados",
        icon: "warning"
      })
      return;
    }

    this.myService.postPedidoProducto(this.pedido).subscribe(
      data => {
        Swal.fire({
          title: "Agregar pedido",
          text: "Se logor agregar el pedido",
          icon: "success"
        })
      },
      error => {
        Swal.fire({
          title: "Agregar pedido",
          text: "No se logro agregar el pedido",
          icon: "error"
        })
      }
    )

    this.myService.reduceStock(this.amountPedido).subscribe(
      update => {
        Swal.fire({
          title: "Actualizar stock",
          text: "Se logro actualizar el stock",
          icon: "success"
        })
      },
      error => {
        Swal.fire({
          title: "Actualizar el stock",
          text: "No se logro el stock",
          icon: "error"
        })
      }
    )
  }
}
