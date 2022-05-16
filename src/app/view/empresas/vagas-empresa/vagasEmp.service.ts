import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { CrudService } from 'src/app/shared/crud-service';
import { environment } from 'src/environments/environment';
import { VagasService } from '../../vagas/vagas.service';
import { VagasEmpresa } from '../vagasEmpresas';

@Injectable({
  providedIn: 'root'
})
export class VagasEmpresasService extends CrudService<VagasEmpresa> {
  
    constructor(
      protected override http:HttpClient, 
      private service:VagasService

      ) {
    super(http,`${environment.API}vagas/empresas/${service.getId()}`);
  }

  override list(){
    return this.http.get<VagasEmpresa[]>(`${environment.API}vagas/empresas/${this.service.getId()}`)
    .pipe(
        tap(console.log)
    );
  }
  override remove(id:number){
    return this.http.delete(`${environment.API}vagas/${id}`)
  }
  
}