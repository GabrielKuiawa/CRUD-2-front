import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/crud-service';
import { environment } from 'src/environments/environment';
import { Candidatar } from './todas-as-vagas/candidatar';

@Injectable({
  providedIn: 'root'
})
export class CandidatarService extends CrudService<Candidatar>{

  constructor(protected override http:HttpClient) {
    super(http,`${environment.API}candidatar`);
  }
  getUsuario(){
    return localStorage.getItem('usuario')
  }

}
