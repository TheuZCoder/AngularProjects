import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../model/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  private baseUrl = 'http://localhost:3000/menu';

  constructor(private http: HttpClient) { }

  getPizzas(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl);
  }
}
