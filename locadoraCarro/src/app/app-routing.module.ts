import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { CarrosComponent } from './view/carros/carros.component';
import { MeusAlugueisComponent } from './view/meus-alugueis/meus-alugueis.component';
import { LoginComponent } from './view/login/login.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { EditarAluguelComponent } from './components/editar-aluguel/editar-aluguel.component';
import { FuncionarioComponent } from './view/funcionario/funcionario.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'carrosDisponiveis',
    component: CarrosComponent,
  },
  {
    path: 'meuAluguel',
    component: MeusAlugueisComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'editar-aluguel/:id',
    component: EditarAluguelComponent,
  },
  {
    path: 'funcionario',
    component: FuncionarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
