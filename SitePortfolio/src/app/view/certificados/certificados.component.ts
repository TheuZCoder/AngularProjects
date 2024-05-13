import { Component } from '@angular/core';
import { Certificado } from 'src/app/model/certificado.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css'],
})
export class CertificadosComponent {
  certificados: Certificado[] = [
    {
      nome: 'Fundamento Desenvolvimento de Software',
      imagemUrl: 'assets/img/microsoft.jpg',
    },
    {
      nome: 'Desenvolvimento HTML',
      imagemUrl: 'assets/img/Html.png',
    },
    {
      nome: 'Desenvolvimento JavaScript',
      imagemUrl: 'assets/img/Js.png',
    },
    {
      nome: 'Desenvolvimento Java',
      imagemUrl: 'assets/img/Java.png',
    },
  ];
  certificadosFiltrados: Certificado[] = [];
  termoBusca: string = '';

  constructor() {
    this.certificadosFiltrados = this.certificados;
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.certificadosFiltrados = this.certificados.filter((produto) =>
      produto.nome.toLowerCase().includes(value)
    );
  }
}
