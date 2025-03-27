import { Component } from '@angular/core';
import { TicketService } from '../../employee/ticket.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrl: './managers.component.css'
})
export class ManagersComponent {
  managers: any[] = [];
  
    constructor(private connector: TicketService) {}
  
    ngOnInit() {
      this.connector.getAllManagers().subscribe({
        next: (data) => {
          console.log('Managers retrieved:', data);
          this.managers = data;
        },
        error: (error) => {
          console.error('Error fetching employees:', error);
        }
      });
    }
}
