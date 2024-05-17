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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
