import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TopnavbarComponent } from 'src/app/components/home/topnavbar/topnavbar.component';
import { BotnavbarComponent } from 'src/app/components/home/botnavbar/botnavbar.component';
import { HomeComponent } from 'src/app/components/home/home/home.component';
import { MatTableModule } from '@angular/material/table'; 
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    TopnavbarComponent,
    BotnavbarComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    FormsModule,
    CarouselModule,
    CardModule
  ],
  exports: [
    TopnavbarComponent,
    BotnavbarComponent,
    HomeComponent
  ]
})
export class HomeModule { }
