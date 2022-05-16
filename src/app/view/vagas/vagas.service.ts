import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CrudService } from '../../shared/crud-service';
import { Vagas } from './vagas';

@Injectable({
  providedIn: 'root'
})
export class VagasService extends CrudService<Vagas>{

  constructor(protected override http:HttpClient) {
    super(http, `${environment.API}vagas`);
  }
  getId(){
    let id = localStorage.getItem('id')
    return id
  }

}
