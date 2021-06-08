import { FooterModule } from './components/footer/footer.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { NavbarModule } from './components/navbar/navbar.module';


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