import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  managerName: string='Manager Account'
  constructor(private router:Router){

  }
  ngOnInit() {
    const name = localStorage.getItem('managerName');
    if (name) {
      this.managerName = name;
    }
  }
  logout() {
    localStorage.removeItem('authtoken');     // Assuming your token is stored as 'token'
    localStorage.removeItem('managerName');      
    console.log('User logged out');
    this.router.navigate(['/manager/managerlogin']);      // Redirecting to login page after logout
  }
}
