import { NavbarModule } from './navbar/navbar.module';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    NavbarModule
  ],
  exports: [
    HeaderModule,
    FooterModule,
    NavbarModule
  ]
})
export class CoreModule { }