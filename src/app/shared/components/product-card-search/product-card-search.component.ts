import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../../../core/models/Product';
@Component({
  selector: 'app-product-card-search',
  standalone: true,
  imports: [],
  templateUrl: './product-card-search.component.html',
  styleUrl: './product-card-search.component.scss'
})
export class ProductCardSearchComponent {
  @Input() product: Product = {
    id_product: 0,
    name: '',
    cost: 0,
    amount: 0,
    brand: ''
  }
}
