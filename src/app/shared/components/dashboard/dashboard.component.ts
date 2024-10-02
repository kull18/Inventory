import { Component } from '@angular/core';
import { FaIconComponent, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  faPlus, faDeleteLeft  } from '@fortawesome/free-solid-svg-icons' ;
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  //array options
  options: any[] = [{icon: faPlus, name: 'agregar'}, {icon: faDeleteLeft, name: "eliminar"}]
}
