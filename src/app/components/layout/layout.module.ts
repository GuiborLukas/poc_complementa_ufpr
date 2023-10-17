import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent
  ]
})
export class LayoutModule { }
