import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
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





  constructor(
    private service:VagasService,
    private candidata:CandidatarService,
    private router : Router,
    private snackBar: MatSnackBar,
    private fb: FormBuilder,

  ) 
  {} 

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


 
  candidatar(id:number){;

    const candidatar = {
      email:this.candidata.getUsuario(),
      id_vaga:`${id}`
    }

    return this.candidata.post(candidatar).subscribe(success => this.onSuccess(),error => this.onError())
  }

  Logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }
  private onSuccess() {
    this.snackBar.open('vaga cadastrada com sucesso!', '', { duration: 3000 });
  }
  private onError() {
    this.snackBar.open('Erro ao em cadastrar vaga', '', { duration: 3000 });
  }

}
