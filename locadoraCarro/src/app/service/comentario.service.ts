import { Injectable } from '@angular/core';
import { Comentarios } from '../models/comentariosModel';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private comentariosData: Comentarios[] = [
    { text: "Excelente serviço! Recomendo a todos.", author: "João Silva" },
    { text: "Fiquei muito satisfeito com o atendimento e a qualidade dos carros.", author: "Maria Oliveira" },
    { text: "A empresa superou minhas expectativas. Voltarei a alugar novamente.", author: "Carlos Santos" }
  ];

  constructor() {}

  getTestimonials(): Comentarios[] {
    return this.comentariosData;
  }
}
