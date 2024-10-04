import { Component } from '@angular/core';
import { Product } from '../../../core/models/Product';
import { Input } from '@angular/core';
@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [],
  templateUrl: './card-view.component.html',
  styleUrl: './card-view.component.scss'
})
export class CardViewComponent {
  @Input() product: Product = {
    id_product: 0,
    name: '',
    cost: 0,
    amount: 0,
    brand: ''
  }
}
