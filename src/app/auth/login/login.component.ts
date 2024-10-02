import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyServiceService } from '../../core/services/my-service.service';2

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  myForm: FormGroup; 
  constructor(private fmB: FormBuilder, private myServiceLogin: MyServiceService) {
    this.myForm = this.fmB.group({
    })
  }

  login(): void {
    this.myServiceLogin.login(this.myForm.value); 
  }
}
