import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresasService } from '../empresas/empresas.service';
import { EmpresaLoginService } from './empresa-login.service';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() usuario!: Boolean ;
  srcResult: any;
  formEmpresa!: FormGroup;
  formUsuario!:FormGroup;
  submitted = false;
  
  constructor(
    private service:UsuarioService,
    private serviceEmpresa:EmpresaLoginService,
    private fb: FormBuilder,
    private fbe: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
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

  //imagem
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

  
  login(){
    return this.service.login(this.formUsuario.value).subscribe(data => {
      const token = JSON.parse(JSON.stringify(data)).token.split()
      // console.log(token);
      localStorage.setItem("token",token);
      this.router.navigate(['/vagas']);
    },error =>{
      console.log('login não funcionou ',error)
    })
  }
  loginEmpresa(){
    console.log(this.formEmpresa.value)
    return this.serviceEmpresa.login(this.formEmpresa.value).subscribe(data => {
      console.log(this.serviceEmpresa);
      
      const token = JSON.parse(JSON.stringify(data)).token.split()

      localStorage.setItem("token:empresa",token);
      
      this.router.navigate(['/empresa']);
    },error =>{
      console.log('login não funcionou ',error)
    })
  }

}
