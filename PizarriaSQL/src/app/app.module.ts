import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './view/home/home.component';
import { CarrouselComponent } from './componentes/carrousel/carrousel.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { CarrinhoComponent } from './componentes/carrinho/carrinho.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroPizzasComponent } from './view/cadastro-pizzas/cadastro-pizzas.component';
import { EditarPizzasComponent } from './view/editar-pizzas/editar-pizzas.component';
import { LoginClienteComponent } from './view/login-cliente/login-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarrouselComponent,
    MenuComponent,
    CarrinhoComponent,
    CadastroPizzasComponent,
    EditarPizzasComponent,
    LoginClienteComponent,
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
