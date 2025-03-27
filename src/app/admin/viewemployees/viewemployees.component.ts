import { Component } from '@angular/core';
import { TicketService } from '../../employee/ticket.service';

@Component({
  selector: 'app-viewemployees',
  templateUrl: './viewemployees.component.html',
  styleUrl: './viewemployees.component.css'
})
export class ViewemployeesComponent {
  employees: any[] = [];

  constructor(private employeeService: TicketService) {}

  ngOnInit() {
    this.employeeService.getAllEmployees().subscribe({
      next: (data) => {
        console.log('Employees retrieved:', data);
        this.employees = data;
      },
      error: (error) => {
        console.error('Error fetching employees:', error);
      }
    });
  }
}
