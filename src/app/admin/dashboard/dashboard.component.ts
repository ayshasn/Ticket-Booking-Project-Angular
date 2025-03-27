import { Component } from '@angular/core';
import { TicketService } from '../../employee/ticket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  sortOrder: string = ''; 
  search: string = ''; 
  status: string = '';  
  details: any = [];

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.ticketService.getRequestDetailsAdmin(this.sortOrder, this.search, this.status)
      .subscribe({
        next: (response: any) => {
          this.details = response;
          console.log('Fetched Data:', response);
        },
        error: (err: any) => {
          console.error('Error fetching data:', err);
        }
      });
  }

  dateSort(order: string) {
    this.sortOrder = order;
    console.log('Sorting by:', order);
    this.getRequests();
  }

  searchEmployee() {
    console.log('Searching for:', this.search);
    this.getRequests();
  }

  statusFilter(status: string) {
    this.status = status;
    console.log('Filtering by status:', status);
    this.getRequests();
  }

  resetFilters() {
    this.search = '';  // Clear search input
    this.sortOrder = ''; // Clear sorting
    this.status = '';  // Clear status filter
  
    this.getRequests() ; // Reload data with default filters
  }

  onCloseRequest(requestId: number) {
    this.ticketService.closeTravelRequest(requestId).subscribe(
      (response) => {
        alert(response.message); // Show success message
        this.getRequests(); // Refresh the request list
      },
      (error) => {
        alert(error.error.error || "An error occurred while closing the request.");
      }
    );
  }
  
}

