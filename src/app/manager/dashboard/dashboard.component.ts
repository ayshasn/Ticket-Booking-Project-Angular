import { Component } from '@angular/core';
import { TicketService } from '../../employee/ticket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  sortOrder: string | any
  search: string | any
  status: string | any
  managerName: string | any
  constructor(
    private ticketService: TicketService ,
  ) { } 
  details:any
  getrequest(){
    this.ticketService.getRequestDetails (this.sortOrder,this.search,this.status).subscribe({
      next: (response:any)=>{
        this.details = response
        console.log(response)
  
      },
      error: (err:any)=>{
        console.log(err)
      }
    })

  } 
  ngOnInit() {
    this.getrequest()
  }
  dateSort(order: string) {
    this.sortOrder = order
    console.log(this.sortOrder)
    this.getrequest()
  }
  searchEmployee() {
    console.log(this.search)
    this.getrequest()
  }

  statusFilter(status:string){
    this.status = status
    console.log(this.status)
    this.getrequest()
  }
  resetFilters() {
    this.search = '';  // Clear search input
    this.sortOrder = ''; // Clear sorting
    this.status = '';  // Clear status filter
  
    this.getrequest() ; // Reload data with default filters
  }
}
