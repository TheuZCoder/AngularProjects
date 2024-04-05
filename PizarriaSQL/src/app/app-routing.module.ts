import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FormsModule } from '@angular/forms'; 
import { LoginFuncionarioComponent } from './view/login-funcionario/login-funcionario.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'loginFunc',
    component: LoginFuncionarioComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule ],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
