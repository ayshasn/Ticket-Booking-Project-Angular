import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { ManagerloginComponent } from './managerlogin/managerlogin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ManagerComponent,
    DashboardComponent,
    NavbarComponent,
    ViewRequestComponent,
    ManagerloginComponent,
    
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    ReactiveFormsModule,
    FormsModule 
  ]
})
export class ManagerModule { }
