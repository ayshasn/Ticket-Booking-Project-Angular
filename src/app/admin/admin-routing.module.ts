import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddmanagerComponent } from './addmanager/addmanager.component';
import { ViewemployeesComponent } from './viewemployees/viewemployees.component';
import { ManagersComponent } from './managers/managers.component';
// import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'viewrequest/:id', component: ViewRequestComponent },
  { path: 'addemployee', component: AddemployeeComponent},
  { path: 'addmanager', component: AddmanagerComponent},
  { path: 'employees', component: ViewemployeesComponent},
  { path: 'managers', component: ManagersComponent},

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
