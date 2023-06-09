import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumericoDirective, EmailDirective } from './directives';

@NgModule({
  declarations: [
    NumericoDirective,
    EmailDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumericoDirective,
    EmailDirective
  ]
})
export class SharedModule { }
