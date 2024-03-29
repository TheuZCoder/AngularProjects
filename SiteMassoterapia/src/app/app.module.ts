import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { HomeComponent } from './View/home/home.component';
import { LoginComponent } from './View/login/login.component';
import { RouterModule } from '@angular/router';
import { AgendamentoComponent } from './View/agendamento/agendamento.component';
import { QuemSomosComponent } from './View/quem-somos/quem-somos.component';
import { ProdutosComponent } from './View/produtos/produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    AgendamentoComponent,
    QuemSomosComponent,
    ProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
