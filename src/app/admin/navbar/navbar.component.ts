import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router:Router){
      
  }

  logout() {
    localStorage.removeItem('authtoken');
    console.log('User logged out');
    this.router.navigate(['/admin/login'])
    
  }
  // ngOnInit() {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     this.router.navigate(['/admin/login']);
  //     return;
  //   }
  //   this.getRequest();
  // }
  // getRequest() {
  //   throw new Error('Method not implemented.');
  // }
  
}
