import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerService } from 'src/app/services/seller.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private SellerService: SellerService
  ) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<Boolean |  UrlTree > {

    if (localStorage.getItem('seller')) {
      return true;
    }

    return this.SellerService.isSellerLoggedIn;
  }
}
