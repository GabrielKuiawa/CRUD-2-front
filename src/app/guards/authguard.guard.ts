import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EmpresaLoginService } from '../view/usuario/empresa-login.service';
import { UsuarioService } from '../view/usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: UsuarioService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.check()) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  
  }
    
}
