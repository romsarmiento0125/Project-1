import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin/admin.component';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/login/login/login.component';
import { SignupComponent } from './components/login/signup/signup.component';

const routes: Routes = [
  { path:"", component: HomeComponent },
  { path: "admin", component: AdminComponent},
  { path: "login", component: LoginComponent},
  { path: "signup", component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
