import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from "../../shared/components/dashboard/dashboard.component";
import { CardViewComponent } from "../../shared/components/card-view/card-view.component";
import { Product } from '../../core/models/Product';
import { MyServiceService } from '../../core/services/my-service.service';
import { AddProductComponent } from "../../admin/add-product/add-product.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardComponent, CardViewComponent, AddProductComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private myService: MyServiceService) {}

  ngOnInit(): void {
    this.myService.getData().subscribe(
      data => {
        this.products = data; 
      }
    )
  }

}
