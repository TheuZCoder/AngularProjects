import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedido } from '../model/pedido.model';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private baseUrl = 'http://localhost:3000/pedidos';

  constructor(private http: HttpClient) {}

  realizarPedido(pedido: Pedido): Observable<any> {
    return this.http.post<any>(this.baseUrl, pedido);
  }
}
