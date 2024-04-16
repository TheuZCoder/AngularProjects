import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginFuncionarioService } from './login-funcionario-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: LoginFuncionarioService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true; // Permite acesso à rota
    } else {
     
      return false; // Bloqueia o acesso à rota
    }
  }
}
