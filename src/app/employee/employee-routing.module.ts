import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmphistoryComponent } from './emphistory/emphistory.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { ViewRequestComponent } from './view-request/view-request.component';

const routes: Routes = [{ path: 'employee', component: EmployeeComponent },
{ path: 'history',component: EmphistoryComponent},
{ path: 'new-request', component: NewRequestComponent },
{ path: 'emplogin', component: EmploginComponent },
{ path: 'viewrequest/:id', component: ViewRequestComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
