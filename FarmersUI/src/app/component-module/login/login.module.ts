import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from '../../components/login/login/login.component';
import { ForgotpassComponent } from '../../components/login/forgotpass/forgotpass.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from '../../components/login/signup/signup.component';  
import { PasswordModule } from 'primeng/password';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotpassComponent,
    SignupComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    PasswordModule
  ],
  exports: [
    LoginComponent,
    ForgotpassComponent,
    SignupComponent,
  ]
})
export class LoginModule { }
