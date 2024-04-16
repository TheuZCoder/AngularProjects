import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Produto } from '../model/pizza.model';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private baseUrl = 'http://localhost:3000/menu';

  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl).pipe(
      map((produtos) =>
        produtos.map((produto) => ({
          ...produto,
          preco_pizza: Number(produto.preco_pizza), // Convertendo para número
        }))
      )
    );
  }


  getPizzaPorId(id: number): Observable<Produto> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Produto>(url);
  }

  cadastrarPizza(pizza: Produto): Observable<any> {
    return this.http.post<any>(this.baseUrl, pizza);
  }
  
  editarPizza(pizza: Produto): Observable<any> {
    const url = `${this.baseUrl}/${pizza.id_pizza}`;
    return this.http.put<any>(url, pizza);
  }

  excluirPizza(id: number): Observable<number> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<number>(url);
  }
}
