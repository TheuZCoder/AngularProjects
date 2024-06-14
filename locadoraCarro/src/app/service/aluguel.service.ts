import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Locacao } from '../models/locacao.model';

@Injectable({
  providedIn: 'root',
})
export class AluguelService {
  private apiUrl = 'http://localhost:3000/locacao'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) {}

  cadastrarLocacao(locacao: Locacao): Observable<any> {
    return this.http.post<any>(this.apiUrl, locacao);
  }

  calcularReceitaTotal(
    dataInicio: string,
    dataFim: string
  ): Observable<{ receita_total: number }> {
    const params = { dataInicio, dataFim };
    return this.http.get<{ receita_total: number }>(
      `${this.apiUrl}/receita-total`,
      { params }
    );
  }
}
