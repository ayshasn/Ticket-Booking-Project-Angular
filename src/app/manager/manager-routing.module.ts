import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';

const routes: Routes = [
  { path: '', component: ManagerComponent },
  { path: 'managerlogin', component: ManagerloginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'viewrequest/:id', component: ViewRequestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
