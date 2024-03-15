import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { MenuComponent } from './componentes/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
