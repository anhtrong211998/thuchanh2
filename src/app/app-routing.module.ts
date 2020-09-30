import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'bai1',
    loadChildren: () => import('./bai1/bai1.module').then((m) => m.Bai1Module),
  },
  {
    path: 'bai2',
    loadChildren: () => import('./bai2/bai2.module').then((m) => m.Bai2Module),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
