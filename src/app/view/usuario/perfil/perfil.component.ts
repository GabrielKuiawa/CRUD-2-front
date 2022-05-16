import { Component, OnInit } from '@angular/core';
import { catchError, empty, map, Observable } from 'rxjs';
import { Vagas } from '../../vagas/vagas';
import { PerfilService } from '../perfil.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  vagas$!:Observable<Vagas[]>


  constructor(private service:PerfilService) { }

  ngOnInit(): void {
    this.listar()
  }
  listar(){
    this.vagas$ = this.service.list().pipe(
      map(result => result.vagas),
      catchError((error: any) => {
        console.error(error);
        return empty();
    }))

  }


}
