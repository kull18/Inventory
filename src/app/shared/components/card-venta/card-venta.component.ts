import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../core/models/Product';
import { Input } from '@angular/core';

@Component({
  selector: 'app-card-venta',
  standalone: true,
  imports: [],
  templateUrl: './card-venta.component.html',
  styleUrl: './card-venta.component.scss'
})
export class CardVentaComponent {
  @Input() product: Product = {
    id_product: 0,
    name: '',
    cost: 0,
    amount: 0,
    brand: ''
  }

  @Output() productId = new EventEmitter<number>();

  addproduct(): void {
    this.productId.emit(this.product.id_product); 
    console.log(this.productId)
  }
}
