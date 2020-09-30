import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Bai2Component } from './bai2.component';
import { HumbergerComponent } from './humberger/humberger.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';


export const bai2Routes: Routes = [
  {
      path: '', component: Bai2Component,
      // children: [
      //     {
      //         path: '', component: Bai1Component
      //     },
         
      // ]
  }
];
@NgModule({
  declarations: [HumbergerComponent, HeaderComponent, NavbarComponent, BannerComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(bai2Routes),
  ]
})
export class Bai2Module { }
