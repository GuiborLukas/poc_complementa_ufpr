import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquareCardComponent } from './square-card/square-card.component';
import { RectCardComponent } from './rect-card/rect-card.component';




@NgModule({
  declarations: [
    SquareCardComponent,
    RectCardComponent
  ],
  
  imports: [
    CommonModule
  ],
  exports: [
    SquareCardComponent,
    RectCardComponent
  ]
})
export class CardsModule { }
