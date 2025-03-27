import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrl: './new-request.component.css'
})
export class NewRequestComponent {
  managerName: string | null = null;
  employeeId: number | null = null;
  managerId: number | null = null;
  ticketStatus: string = '';

  travelForm!: FormGroup;

  constructor(private ticketservice: TicketService) {}

  ngOnInit() {
    // ✅ Get values first
    this.managerName = this.ticketservice.getManager();
    this.employeeId = Number(this.ticketservice.getEmployeeId());
    this.managerId = Number(this.ticketservice.getManagerId());

    console.log("Manager Name:", this.managerName);
    console.log("Employee ID:", this.employeeId);
    console.log("Manager ID:", this.managerId);

    // ✅ Initialize the form AFTER fetching values
    this.travelForm = new FormGroup({
      name: new FormControl(''),
      from_location: new FormControl(''),
      to_location: new FormControl(''),
      start_date: new FormControl(''),
      end_date: new FormControl(''),
      lodging_required: new FormControl(''),
      hotel_preference: new FormControl(''),
      travel_mode: new FormControl(''),
      purpose_of_travel: new FormControl(''),
      additional_notes: new FormControl(''),
      employee: new FormControl(this.employeeId), 
      manager: new FormControl(this.managerId)   
    });
  }

  newTicket() {
    const ticketData = {
      ...this.travelForm.value, 
      employee: this.employeeId, // ✅ Send only the ID
      manager: this.managerId
    }
    ;
    this.ticketservice.ticketButton(ticketData).subscribe({
      next: (response: any) => {
        this.ticketStatus = response;
        console.log(response);
        alert(this.ticketStatus);
      }
    });
  }
}
