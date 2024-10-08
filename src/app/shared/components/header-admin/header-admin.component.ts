import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-admin.component.html',
  styleUrl: './header-admin.component.scss'
})
export class HeaderAdminComponent {

  constructor(private router: Router) {}

  getDirection(): void {
    const directionRole = Number(localStorage.getItem("role"));

    if(directionRole === 1) {
      console.log("si")
      this.router.navigate(['/admin/home'])
    }

    if(directionRole === 2) {
      this.router.navigate(['/admin/home-employee'])
    }

  }
}
