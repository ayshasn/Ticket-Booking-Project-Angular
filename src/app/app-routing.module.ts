import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectComponent } from './select/select.component';


const routes: Routes = [
   { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },
   { path: 'manager', loadChildren: () => import('./manager/manager.module').then(m => m.ManagerModule) },
   { path: 'select', component: SelectComponent },
   { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
