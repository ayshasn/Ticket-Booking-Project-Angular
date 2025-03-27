import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddmanagerComponent } from './addmanager/addmanager.component';
import { ViewemployeesComponent } from './viewemployees/viewemployees.component';
import { ManagersComponent } from './managers/managers.component';


@NgModule({
  declarations: [
    AdminComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    ViewRequestComponent,
    AddemployeeComponent,
    AddmanagerComponent,
    ViewemployeesComponent,
    ManagersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
