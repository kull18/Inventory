import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../core/models/Product';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-card-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card-edit.component.html',
  styleUrl: './card-edit.component.scss'
})
export class CardEditComponent {
  isEditing: boolean = false; 
  @Input() product: Product = {
    id_product: 0,
    name: '',
    cost: 0,
    amount: 0,
    brand: ''
  }
  originalName: string =  '';
  originalBrand: string  = '';

  @Output() senProductEdited = new EventEmitter<{product: Product; name: string; brand: string}>();


  toggleEditing(): void {
    this.isEditing = !this.isEditing;

    if(this.isEditing) {
      this.originalName = this.product.name; 
      this.originalBrand = this.product.brand;
    }
  }

  saveChanges(): void {
    this.product.name;
    this.senProductEdited.emit({
      product: this.product,
      name: this.originalName,
      brand: this.originalBrand
    }); 
  }
}
