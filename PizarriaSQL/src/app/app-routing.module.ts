import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FormsModule } from '@angular/forms'; 
import { LoginFuncionarioComponent } from './view/login-funcionario/login-funcionario.component';
import { CadastroPizzasComponent } from './view/cadastro-pizzas/cadastro-pizzas.component';
import { AuthGuard } from './servico/guard.service';
import { EditarPizzasComponent } from './view/editar-pizzas/editar-pizzas.component';


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
  {
    path: 'cadastroPizzas',
    component: CadastroPizzasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editarPizzas/:id',
    component: EditarPizzasComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule ],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
