import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { CertificadosComponent } from './view/certificados/certificados.component';
import { ProjetosComponent } from './view/projetos/projetos.component';
import { SobreMimComponent } from './view/sobre-mim/sobre-mim.component';
import { ContatoComponent } from './view/contato/contato.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'certificados',
    component: CertificadosComponent
  },
  {
    path: 'projetos',
    component: ProjetosComponent
  },
  {
    path: 'sobreMim',
    component: SobreMimComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
