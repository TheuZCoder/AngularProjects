import { Component, OnInit } from '@angular/core';
import { Comentarios } from 'src/app/models/comentariosModel';
import { ComentarioService } from 'src/app/service/comentario.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit{
  Comentarios: Comentarios[] = [];

  constructor(private Comentarioservice: ComentarioService) {}

  ngOnInit(): void {
    this.Comentarios = this.Comentarioservice.getTestimonials();
  }
}
