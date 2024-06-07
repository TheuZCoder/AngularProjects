import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/models/carro.model';
import { CarroService } from 'src/app/service/carro.service';
import { ClienteService } from 'src/app/service/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css'],
})
export class CarrosComponent implements OnInit {
  carros: Carro[] = [];
  carrosAll: Carro[] = [];
  mostrarDisponiveis: boolean = false;
  carroSelecionado: Carro | null = null;

  constructor(
    private carroService: CarroService,
    private authService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCarros();
  }

  loadCarros(): void {
    this.carroService.getCarros().subscribe((carros) => {
      this.carros = carros;
      this.carrosAll = carros;
    });
  }

  toggleDisponiveis() {
    this.mostrarDisponiveis = !this.mostrarDisponiveis;
    if (this.mostrarDisponiveis) {
      this.carros = this.carrosAll.filter(
        (carro) => carro.disponibilidade_carro === true
      );
    } else {
      this.carros = this.carrosAll;
    }
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.carros = this.carrosAll.filter((carro) =>
      carro.modelo_carro.toLowerCase().includes(value)
    );
  }

  abrirPainelAluguel(carro: Carro): void {
    if (!carro.disponibilidade_carro) {
      Swal.fire({
        icon: 'error',
        title: 'Carro indisponível',
        text: 'Este carro já foi alugado e não está disponível no momento.',
      });
      return;
    }

    if (this.authService.isLoggedIn) {
      this.carroSelecionado = carro;
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Você precisa estar logado para alugar um carro',
        showConfirmButton: true,
        confirmButtonText: 'Fazer login',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Redirecionando para a página de login...');
          this.router.navigate(['login']);
        }
      });
    }
  }

  fecharPainelAluguel(): void {
    this.carroSelecionado = null;
    this.loadCarros(); // Atualiza a lista de carros
  }

  onAluguelCriado(): void {
    this.loadCarros(); // Atualiza a lista de carros quando um aluguel é criado
  }
}
