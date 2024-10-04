import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyServiceService } from '../../core/services/my-service.service'; 2
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  myForm: FormGroup;
  constructor(private fmB: FormBuilder, private myServiceLogin: MyServiceService, private router: Router) {
    this.myForm = this.fmB.group({
      name: [''],
      password: ['']
    })
  }

  login(): void {
    this.myServiceLogin.login(this.myForm.value).subscribe(
      data => {

        const role = data.personal.id_role;

        if (role === 1) {
          this.router.navigate(['/admin/home'])
        }

        if(role === 2) {
          this.router.navigate(['/admin/home-employee'])
        }
      },

      error => {
        Swal.fire({
          title: "login",
          text: "error de logeo",
          icon: "error"
        })
      }
    )
  }
}
