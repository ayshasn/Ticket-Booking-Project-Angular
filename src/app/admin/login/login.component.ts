import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from '../../employee/ticket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private connector: TicketService, private router:Router) {

  }
  loginForm !: FormGroup



  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
    })

  }
  response: any

  onLogin() {
    console.log('Trying to login :', this.loginForm.value);

    this.connector.admin_login(this.loginForm).subscribe(
      data => {
        console.log('Received data:', data);
        this.response = data;
        console.log(this.response.token)
        this.connector.storeToken(this.response.token)
        console.log(this.response.token)
        this.router.navigate(['admin/dashboard'])
        

      },
      error => {
        console.log('Error occurred', error);
      }
    );
  }
}  