import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from '../shared/crud-service';
import { Empresas } from './empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService extends CrudService<Empresas> {
  
  constructor(protected override http:HttpClient) {
    super(http,`${environment.API}empresas`);
  }
  
}
