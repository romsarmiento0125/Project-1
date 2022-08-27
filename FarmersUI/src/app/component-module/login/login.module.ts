import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from '../../components/login/login/login.component';
import { ForgotpassComponent } from '../../components/login/forgotpass/forgotpass.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    ForgotpassComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports: [
    LoginComponent,
    ForgotpassComponent
  ]
})
export class LoginModule { }
