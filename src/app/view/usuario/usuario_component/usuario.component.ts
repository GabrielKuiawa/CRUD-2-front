import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresasService } from '../../empresas/empresas.service';
import { VagasService } from '../../vagas/vagas.service';
import { EmpresaLoginService } from '../empresa-login.service';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() usuario!: Boolean ;

  formEmpresa!: FormGroup;
  formUsuario!:FormGroup;
  submitted = false;
  
  constructor(
    private service:UsuarioService,
    private serviceEmpresa:EmpresaLoginService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private vagas:VagasService
  ) 
  { 
    this.formUsuario = this.fb.group({
      email:[null],
      senha:[null]
    });
    this.formEmpresa = this.fb.group({
      cnpj:[],
      senha:[null]
    });
  };


  ngOnInit(): void {
    console.log(this.usuario);
  }
  comum(){
    this.usuario = true
    return this.usuario
  }
  empresa(){
    this.usuario = false
    return this.usuario
  }
  
  login(){
    return this.service.login(this.formUsuario.value).subscribe(data => {
      
      const usuario = JSON.parse(JSON.stringify(data)).usuarioEmail.split()    
      
      const token = JSON.parse(JSON.stringify(data)).token.split()
   
      localStorage.setItem("token",token);
      localStorage.setItem("usuario",usuario);
      this.onSuccess()
      this.router.navigate(['/vagas']);
    },error =>{
      this.onError()
    })
  }
  loginEmpresa(){
    return this.serviceEmpresa.login(this.formEmpresa.value).subscribe(data => {
      
      const empresa_id = JSON.parse(JSON.stringify(data)).id;

      const token = JSON.parse(JSON.stringify(data)).token.split();

      localStorage.setItem("token:empresa",token);


      localStorage.setItem("id",empresa_id);
      
      this.router.navigate(['/empresa']);
      this.onSuccess()
    },error =>{
      this.onError()
    })
  }
  private onSuccess() {
    this.snackBar.open('login com sucesso!', '', { duration: 3000 });
  }
  private onError() {
    this.snackBar.open('Erro ao logar', '', { duration: 3000 });
  }

}
