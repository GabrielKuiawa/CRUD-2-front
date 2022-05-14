import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/crud-service';
import { environment } from 'src/environments/environment';
import { EmpresaLogin } from './empresaLogin';
;

@Injectable({
  providedIn: 'root'
})
export class EmpresaLoginService extends CrudService<EmpresaLogin>{

  constructor(protected override http: HttpClient) {
    super(http,`${environment.API}empresas/login`);
  }       
  checkEmpresa(): boolean {
    return localStorage.getItem('token:empresa') ? true : false;
  }       

}
