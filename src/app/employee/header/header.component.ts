import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  employeeName: string='Employee Account'
  constructor(private router:Router){

  }
  ngOnInit() {
    const name = localStorage.getItem('employeeName');
    if (name) {
      this.employeeName = name;
    }
  }
  logout() {
    localStorage.removeItem('authToken');     // Assuming your token is stored as 'token'
    localStorage.removeItem('employeeName'); 
    localStorage.removeItem('managerName')   ;  
    console.log('User logged out');
    this.router.navigate(['/employee/emplogin']);      // Redirecting to login page after logout
  }
  
}
