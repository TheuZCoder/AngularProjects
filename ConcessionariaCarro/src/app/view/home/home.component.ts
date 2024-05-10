import { Component } from '@angular/core';
import { BannerComponent } from "../../components/banner/banner.component";
import { ComentariosComponent } from "../../components/comentarios/comentarios.component";
import { LocalizacaoComponent } from "../../components/localizacao/localizacao.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [BannerComponent, ComentariosComponent, LocalizacaoComponent]
})
export class HomeComponent {

}
