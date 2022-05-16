import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
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
      this.router.navigate(['/vagas']);
    },error =>{
      console.log('login não funcionou ',error)
    })
  }
  loginEmpresa(){
    return this.serviceEmpresa.login(this.formEmpresa.value).subscribe(data => {
      
      const empresa_id = JSON.parse(JSON.stringify(data)).id;

      const token = JSON.parse(JSON.stringify(data)).token.split();

      localStorage.setItem("token:empresa",token);


      localStorage.setItem("id",empresa_id);
      
      this.router.navigate(['/empresa']);
    },error =>{
      console.log('login não funcionou ')
    })
  }

}
