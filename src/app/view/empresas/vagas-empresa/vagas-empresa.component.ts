import { Component, OnInit } from '@angular/core';
import { catchError, empty, map, Observable } from 'rxjs';
import { VagasEmpresa } from '../vagasEmpresas';
import { VagasEmpresasService } from './vagasEmp.service';

@Component({
  selector: 'app-vagas-empresa',
  templateUrl: './vagas-empresa.component.html',
  styleUrls: ['./vagas-empresa.component.css']
})
export class VagasEmpresaComponent implements OnInit {

  vagasEmpresa$!:Observable<VagasEmpresa[]>
  constructor(private service:VagasEmpresasService) { }

  ngOnInit(): void {
    this.listar()
  }
  listar(){
    return this.service.list().subscribe(data=>console.log(data))
    //   map(result => result.empresa),
    //   catchError((error: any) => {
    //     console.error(error);
    //     return empty();
    // }))
  }

}
