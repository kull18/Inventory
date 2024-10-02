import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from "../../shared/components/dashboard/dashboard.component";
import { CardViewComponent } from "../../shared/components/card-view/card-view.component";
import { Product } from '../../core/models/Product';
import { MyServiceService } from '../../core/services/my-service.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DashboardComponent, CardViewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor() {}

  ngOnInit(): void {
  
  }

}
