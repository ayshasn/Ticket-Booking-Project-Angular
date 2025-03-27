import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { HeaderComponent } from './header/header.component';
import { EmphistoryComponent } from './emphistory/emphistory.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditRequestComponent } from './edit-request/edit-request.component';
import { ViewRequestComponent } from './view-request/view-request.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    HeaderComponent,
    EmphistoryComponent,
    NewRequestComponent,
    EmploginComponent,
    EditRequestComponent,
    ViewRequestComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
