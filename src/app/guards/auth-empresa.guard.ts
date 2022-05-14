import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpresaLoginService } from '../view/usuario/empresa-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthEmpresaGuard implements CanActivate {
  constructor(private auth: EmpresaLoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.checkEmpresa()) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  
  }
}
