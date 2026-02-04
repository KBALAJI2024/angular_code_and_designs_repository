import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagementComponent } from './management/management.component';
import { FormsModule } from '@angular/forms';
import { BoxComponent } from './box/box.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PracticeCodeComponent } from './practice-code/practice-code.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';


@NgModule({
  declarations: [
    AppComponent,
    ManagementComponent,
    BoxComponent,
    PaymentDetailsComponent,
    PracticeCodeComponent,
    EmployeeManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
