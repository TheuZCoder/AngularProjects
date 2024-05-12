import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { CertificadosComponent } from './view/certificados/certificados.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'certificados',
    component: CertificadosComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
