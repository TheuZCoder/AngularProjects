import { Injectable } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authService: ClienteService, private router:Router) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticaded()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}
