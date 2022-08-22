import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './component-module/home/home.module';
import { AdminModule } from './component-module/admin/admin.module';
import { LoginComponent } from './components/login/login/login.component';
import { ForgotpassComponent } from './components/login/forgotpass/forgotpass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
