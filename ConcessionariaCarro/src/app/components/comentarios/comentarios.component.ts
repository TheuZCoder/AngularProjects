import { Component, OnInit } from '@angular/core';
import { Comentarios } from '../../models/comentariosModel';
import { ComentariosServiceService } from '../../service/comentarios-service.service';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [],
  templateUrl: './comentarios.component.html',
  styleUrl: './comentarios.component.css'
})
export class ComentariosComponent implements OnInit{
  Comentarios: Comentarios[] = [];

  constructor(private Comentarioservice: ComentariosServiceService) {}

  ngOnInit(): void {
    this.Comentarios = this.Comentarioservice.getTestimonials();
  }
}
