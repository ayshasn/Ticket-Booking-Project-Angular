import { Component } from '@angular/core';
import { TicketService } from '../ticket.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrl: './emplogin.component.css'
})
export class EmploginComponent {
    constructor(private connector: TicketService, private router: Router){}
    loginForm !: FormGroup

    ngOnInit() {
      this.loginForm = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
      })
  
    }
    response: any

    onLogin() {
      console.log('Trying to login:', this.loginForm.value);
    
      const loginData = {
        ...this.loginForm.value,
        expected_role: 'employee'
      };
    
      this.connector.employee_login(loginData).subscribe(
        data => {
          console.log('Received data:', data);
          this.response = data;
          this.connector.storeToken(this.response.token);
          localStorage.setItem('employeeName', this.response.username);
          localStorage.setItem('managerName',this.response.manager_name);
          localStorage.setItem('employeeId', this.response.employee_id);
          localStorage.setItem('managerId', this.response.manager_id);
          this.router.navigate(['employee/history']);
        },
        error => {
          console.log('Error occurred:', error);
          alert('Login Failed. Check Username/Password or Role');
        }
      );
    }
    
    
  }

