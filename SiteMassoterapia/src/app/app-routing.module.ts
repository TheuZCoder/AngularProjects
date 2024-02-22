import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './View/home/home.component';
import { LoginComponent } from './View/login/login.component';
import { AgendamentoComponent } from './View/agendamento/agendamento.component';
import { QuemSomosComponent } from './View/quem-somos/quem-somos.component';
import { ProdutosComponent } from './View/produtos/produtos.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'agendamento',
    component: AgendamentoComponent
  },

  {
    path: 'quem_somos',
    component: QuemSomosComponent
  },

  {
    path: 'produtos',
    component: ProdutosComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
