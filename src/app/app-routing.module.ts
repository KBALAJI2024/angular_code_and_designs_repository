import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management/management.component';
import { BoxComponent } from './box/box.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PracticeCodeComponent } from './practice-code/practice-code.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';

const routes: Routes = [
  {path : 'school',component : ManagementComponent},
  {path : '' ,component : ManagementComponent},
  {path : "box", component : BoxComponent},
  {path : "payment" ,component : PaymentDetailsComponent},
  {path : "practiceCode",component : PracticeCodeComponent},
  {path : "employeeManagement", component : EmployeeManagementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
