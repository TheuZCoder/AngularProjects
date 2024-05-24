import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LocalizacaoComponent } from './components/localizacao/localizacao.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/login/login.component';
import { FormsModule } from '@angular/forms';
import { CarrosComponent } from './view/carros/carros.component';
import { MeusAlugueisComponent } from './view/meus-alugueis/meus-alugueis.component';
import { ClienteService } from './service/cliente.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ComentariosComponent,
    FooterComponent,
    HeaderComponent,
    LocalizacaoComponent,
    CadastroComponent,
    HomeComponent,
    LoginComponent,
    CarrosComponent,
    MeusAlugueisComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
