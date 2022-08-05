import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgxScrollTopModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class TemplateModule { }
