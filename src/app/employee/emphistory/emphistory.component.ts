import { Component } from '@angular/core';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-emphistory',
  templateUrl: './emphistory.component.html',
  styleUrl: './emphistory.component.css'
})
export class EmphistoryComponent {
  managerName: string | any
  constructor(
    private ticketService: TicketService ,
  ) { }
  details:any 
  ngOnInit() {
    this.ticketService.getTicketDetails().subscribe({
      next: (response:any)=>{
        this.details = response
        console.log(response)
        this.managerName = this.ticketService.getManager();
        console.log(this.managerName)
      },
      error: (err:any)=>{
        console.log(err)
      }
    })
  }
  selectedTicketId:Number = 0
  deleteTicket(){
    this.ticketService.deleteTicket(this.selectedTicketId).subscribe({
      next: (response:any)=>{
        console.log(response)
        alert(response)
        this.ngOnInit()
      }
    })
  }
}

