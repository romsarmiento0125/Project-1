import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from 'src/app/components/admin/admin/admin.component';
import { TopnavbarComponent } from 'src/app/components/admin/topnavbar/topnavbar.component';



@NgModule({
  declarations: [
    AdminComponent,
    TopnavbarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AdminComponent,
    TopnavbarComponent,
  ]
})
export class AdminModule { }
