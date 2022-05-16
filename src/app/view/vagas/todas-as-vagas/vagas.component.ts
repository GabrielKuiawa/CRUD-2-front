import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, empty, map, Observable } from 'rxjs';
import { CandidatarService } from '../candidatar.service';
import { Vagas } from '../vagas';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnInit {

  vagas$!:Observable<Vagas[]>
  cad!:FormGroup;




  constructor(
    private service:VagasService,
    private candidata:CandidatarService,
    private router : Router,
    private fb: FormBuilder,

  ) 
  {
    console.log(this.cad);    
    this.cad = this.fb.group({
      id_vaga:[null],
      email:[this.candidata.getUsuario()]
    })
  } 

  ngOnInit(): void {
    this.listar();
    console.log(this.vagas$);
    
  }
  listar(){
    this.vagas$ = this.service.list().pipe(
      map(result => result.vagas),
      catchError((error: any) => {
        console.error(error);
        return empty();
    }))
  }


 
  candidatar(){

    return this.candidata.save(this.cad.value).subscribe(data => {
      console.log(data);
      
    })
  }

  Logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }

}
