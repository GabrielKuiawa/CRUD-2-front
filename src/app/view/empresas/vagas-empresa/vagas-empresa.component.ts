import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, empty, map, observable, Observable, Subscription } from 'rxjs';
import { DialogComponent } from '../../dialog/dialog/dialog.component';
import { Vagas } from '../../vagas/vagas';
import { VagasEmpresa } from '../vagasEmpresas';
import { VagasEmpresasService } from './vagasEmp.service';

@Component({
  selector: 'app-vagas-empresa',
  templateUrl: './vagas-empresa.component.html',
  styleUrls: ['./vagas-empresa.component.css']
})
export class VagasEmpresaComponent implements OnInit {

  vagasEmpresa$!:Observable<VagasEmpresa[]>
  subscription!: Subscription 

  constructor(
    private service:VagasEmpresasService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.listar()
    
  }
  listar(){
    this.vagasEmpresa$ = this.service.list().pipe(
      map(result => result.EmpresaId.tudo),
      catchError((error: any) => {
        console.error(error);
        return empty();
    }))

    this.subscription = this.vagasEmpresa$.subscribe()
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    // this.vagasEmpresa$.next([])
  }
  openDialogEdit(vagas:any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',data: {
        id_vag:vagas.id_vag,
        titulo:vagas.titulo,
        salario:vagas.salario,
        descricao:vagas.descricao,
      }      
    });
    
    dialogRef.afterClosed().subscribe(result => {
      this.listar()
      // alert("cdf")
    });
  }
  
  delete(id:number){
    return this.service.remove(id).subscribe(data => {
      this.listar()
    })    
  }
}
