import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashAdminComponent } from './dash-admin/dash-admin.component';
import { SquareCardComponent } from '../cards/square-card/square-card.component';
import { RectCardComponent } from '../cards/rect-card/rect-card.component';



@NgModule({
  declarations: [
    DashAdminComponent,
    SquareCardComponent,
    RectCardComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class AdminModule { 
  
}
