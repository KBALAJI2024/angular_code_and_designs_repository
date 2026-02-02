import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagementComponent } from './management/management.component';
import { BoxComponent } from './box/box.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';

const routes: Routes = [
  {path : 'school',component : ManagementComponent},
  {path : '' ,component : ManagementComponent},
  {path : "box", component : BoxComponent},
  {path : "payment" ,component : PaymentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
