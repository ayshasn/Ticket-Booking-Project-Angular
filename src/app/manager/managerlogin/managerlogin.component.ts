import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TicketService } from '../../employee/ticket.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-managerlogin',
  templateUrl: './managerlogin.component.html',
  styleUrl: './managerlogin.component.css'
})
export class ManagerloginComponent {
  constructor(private connector: TicketService, private router:Router) {

  }
  loginForm !: FormGroup

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    })

  }
  response: any

  onLogin() {
    console.log('Trying to login :', this.loginForm.value);

    const loginData = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
      expected_role: 'manager'   //Add this to differentiate login
    };
  
    this.connector.manager_login(this.loginForm).subscribe(
      data => {
        console.log('Received data:', data);
        this.response = data;
        this.connector.storeToken(this.response.token)
        console.log(this.response.token)
        localStorage.setItem('managerName', this.response.username);

        this.router.navigate(['/manager/dashboard']);
        

      },
      error => {
        console.log('Error occurred', error);
      }
    );
  }
}
