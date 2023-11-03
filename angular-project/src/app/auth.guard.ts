import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerService } from 'src/app/services/seller.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private SellerService: SellerService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    
    if (localStorage.getItem('seller')) {
      this.SellerService.isSellerLoggedIn.next(true);
      return this.router.parseUrl('/seller-home');
    }
    
    return false;
  }
}
