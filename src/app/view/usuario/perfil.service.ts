import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrudService } from 'src/app/shared/crud-service';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs';
import { Vagas } from '../vagas/vagas';

@Injectable({
  providedIn: 'root'
})
export class PerfilService extends CrudService<Vagas>{

  constructor(protected override http:HttpClient) {
    super(http,`${environment.API}candidatar/buscar`);
  }
 
  getUser(){
    let id = localStorage.getItem('usuario')
    return id    
  }
}
