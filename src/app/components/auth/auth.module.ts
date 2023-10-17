import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutModule } from '../layout/layout.module';
import { SelfRegisterComponent } from './login/self-register/self-register.component';

@NgModule({
  declarations: [
    LoginComponent,
    SelfRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LayoutModule
    
  ]
})
export class AuthModule { }
