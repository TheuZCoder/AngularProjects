import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './View/home/home.component';
import { ValoresComponent } from './View/valores/valores.component';
import { ComoChegarComponent } from './View/como-chegar/como-chegar.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'valores',
    component: ValoresComponent,
  },
  {
    path: 'como-chegar',
    component: ComoChegarComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
