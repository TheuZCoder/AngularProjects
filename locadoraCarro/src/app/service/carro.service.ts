import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Carro } from '../models/carro.model';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  private carroUrl = 'http://localhost:3000/carro';

  constructor(private http: HttpClient) { }

  getCarros(): Observable<Carro[]>{
    return this.http.get<Carro[]>(this.carroUrl);
  }

  getCarroById(id: number): Observable<Carro>{
    return this.http.get<Carro>(`${this.carroUrl}/${id}`);
  }
}
