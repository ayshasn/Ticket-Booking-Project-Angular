import { Component } from '@angular/core';
import { TicketService } from '../../employee/ticket.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.css'
})
export class AddemployeeComponent {
  requests: any

  employeeForm!: FormGroup

  errors:any
  managers: any



  constructor(private connector: TicketService, private router: Router) { }

  ngOnInit() {
    this.getManagers()
    this.employeeForm = new FormGroup({
      first_name: new FormControl (''),
      last_name: new FormControl (''),
      designation: new FormControl (''),
      password: new FormControl(''),
      email: new FormControl(''),
      manager_id: new FormControl(''),  
      manager_name: new FormControl(''),
      username:new FormControl(''),
      
    }
    )
  }

  getManagers(): void {
    this.connector.listManagersAdmin().subscribe(
      data => {
        console.log('Received data:', data);
        this.managers = data;
      },
      error => {
        console.log('Error occurred', error);
      }
    );
  }


  onSubmit() {
    console.log('Form submitted:', this.employeeForm.value);
  
    this.connector.addEmployee(this.employeeForm).subscribe({
      next: (response) => {
        console.log('Request successful:', response);

        // const modalElement = document.getElementById('successModal');
      },
      error: (error) => {
        console.error('Request failed:', error);
      }
    });
  }
  
  
  


  // closeModalAndNavigate() {
  //   const modalElement = document.getElementById('successModal');
  //   if (modalElement) {
  //     const modal = bootstrap.Modal.getInstance(modalElement);
  //     modal.hide(); 
  //   }
  //   this.router.navigate(['../employeelist']);
  // }

}
