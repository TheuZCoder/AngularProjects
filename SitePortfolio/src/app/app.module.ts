import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componente/header/header.component';
import { FooterComponent } from './componente/footer/footer.component';
import { HomeComponent } from './view/home/home.component';
import { CertificadosComponent } from './view/certificados/certificados.component';
import { ProjetosComponent } from './view/projetos/projetos.component';
import { SobreMimComponent } from './view/sobre-mim/sobre-mim.component';
import { ContatoComponent } from './view/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CertificadosComponent,
    ProjetosComponent,
    SobreMimComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
