import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './View/home/home.component';
import { BannerDestaquesComponent } from './Components/banner-destaques/banner-destaques.component';
import { ValoresComponent } from './View/valores/valores.component';
import { ComoChegarComponent } from './View/como-chegar/como-chegar.component';
import { SectionComoChegarComponent } from './Components/section-como-chegar/section-como-chegar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerDestaquesComponent,
    ValoresComponent,
    ComoChegarComponent,
    SectionComoChegarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
