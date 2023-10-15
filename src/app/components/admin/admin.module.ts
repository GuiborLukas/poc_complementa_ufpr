import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashAdminComponent } from './dash-admin/dash-admin.component';
import { SquareCardsComponent } from '../cards/square-cards/square-cards.component';


@NgModule({
  declarations: [
    DashAdminComponent,
    SquareCardsComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class AdminModule { }
