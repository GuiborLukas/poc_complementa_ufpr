import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashAdminComponent } from './dash-admin/dash-admin.component';
import { SquareCardComponent } from '../cards/square-card/square-card.component';
import { RectCardComponent } from '../cards/rect-card/rect-card.component';
import { CardsModule } from '../cards/cards.module';



@NgModule({
  declarations: [
    DashAdminComponent
  ],
  imports: [
    CommonModule,
    CardsModule
  ]
})
export class AdminModule { 
  
}
