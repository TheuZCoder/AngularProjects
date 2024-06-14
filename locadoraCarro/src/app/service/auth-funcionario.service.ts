import { Injectable } from '@angular/core';
import { FuncionarioService } from './funcionario.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthFuncionarioService {
  constructor(private authService: FuncionarioService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticaded()) {
      return true;
    } else {
      this.router.navigate(['loginFuncionario']);
      return false;
    }
  }
}
