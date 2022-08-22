import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavbarComponent } from 'src/app/components/home/topnavbar/topnavbar.component';
import { BotnavbarComponent } from 'src/app/components/home/botnavbar/botnavbar.component';
import { HomeComponent } from 'src/app/components/home/home/home.component';



@NgModule({
  declarations: [
    TopnavbarComponent,
    BotnavbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopnavbarComponent,
    BotnavbarComponent,
    HomeComponent
  ]
})
export class HomeModule { }
