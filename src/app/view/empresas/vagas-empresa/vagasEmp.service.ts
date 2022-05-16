import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
  
}