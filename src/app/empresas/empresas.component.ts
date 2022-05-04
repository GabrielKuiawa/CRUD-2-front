import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, empty, map, Observable } from 'rxjs';
import { Empresas } from './empresa';
import { EmpresasService } from './empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresa$!:Observable<Empresas[]>

  constructor(
    private service:EmpresasService,
    private router:Router,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.onRefresh();  
  }
  onRefresh() {
    this.empresa$ = this.service.list().pipe(map(result => result.empresas),
      catchError(error => {
        console.error(error);
        // this.error$.next(true);
        return empty();
      })
    );
  }
  onEdit(id:number){
    this.router.navigate(['/editar', id],{ relativeTo:this.route});
  }
  onDelete(empresa:Empresas){
    this.service.remove(empresa.id).subscribe(
      success => {
        console.log("tudo certo")
        this.onRefresh();
      } ,
      error => console.log("tudo errado")
    );  
  }  

}
