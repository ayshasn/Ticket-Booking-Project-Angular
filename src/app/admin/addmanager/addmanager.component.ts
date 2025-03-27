import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TicketService } from '../../employee/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmanager',
  templateUrl: './addmanager.component.html',
  styleUrl: './addmanager.component.css'
})
export class AddmanagerComponent {
  managerForm!: FormGroup;
  errors: any;

  constructor(private connector: TicketService, private router: Router) { }

  ngOnInit() {
    this.managerForm = new FormGroup({
      first_name: new FormControl (''),
      last_name: new FormControl (''),
      designation: new FormControl (''),
      password: new FormControl(''),
      email: new FormControl(''),
      username: new FormControl(''),
      gender: new FormControl('')
    });
  }

  onSubmit() {
    console.log('Form submitted:', this.managerForm.value);
    

    const managerData = {
      ...this.managerForm.value,
      user_type: 'manager'  // Ensure user_type is set to manager
    };
    
    this.connector.addManager(managerData).subscribe({
      next: (response) => {
        console.log('Manager added successfully:', response);
        this.router.navigate(['/manager-list']);
      },
      error: (error) => {
        console.error('Error adding manager:', error);
        this.errors = error.error;
      }
    });
  }
}
