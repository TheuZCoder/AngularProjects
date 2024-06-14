import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from 'src/app/service/funcionario.service';


@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css'],
})
export class FuncionarioComponent implements OnInit {
  constructor(private funcionarioService: FuncionarioService, private route: Router) {}

  islogged = false;

  ngOnInit() {
    if (!this.funcionarioService.isAuthenticaded()) {
      this.route.navigate(['loginFuncionario']);
    }
  }


}
