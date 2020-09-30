import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Bai1Component } from '../bai1/bai1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';

export const bai1Routes: Routes = [
  {
      path: '', component: Bai1Component,
      // children: [
      //     {
      //         path: '', component: Bai1Component
      //     },
         
      // ]
  }
];
@NgModule({
  declarations: [
    Bai1Component,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(bai1Routes),
  ]
})
export class Bai1Module { }
