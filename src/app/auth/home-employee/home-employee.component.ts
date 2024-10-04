import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../../shared/components/dashboard/dashboard.component';
import { HomeComponent } from "../home/home.component";
import { DashboardEmployeeComponent } from "../../shared/components/dashboard-employee/dashboard-employee.component";
import { CardViewComponent } from "../../shared/components/card-view/card-view.component";
import { MyServiceService } from '../../core/services/my-service.service';
import { Product } from '../../core/models/Product';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home-employee',
  standalone: true,
  imports: [DashboardComponent, HomeComponent, DashboardEmployeeComponent, CardViewComponent, NgFor],
  templateUrl: './home-employee.component.html',
  styleUrl: './home-employee.component.scss'
})
export class HomeEmployeeComponent implements OnInit {
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
