import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresasService } from '../empresas/empresas.service';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() usuario!: Boolean ;
  srcResult: any;
  form!: FormGroup;
  formUsuario!:FormGroup;
  submitted = false;
  
  constructor(
    private service:UsuarioService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) 
  { 
    // this.form = this.fb.group({
    //   nome:[null],
    //   image:[null]      
    // });
    this.formUsuario = this.fb.group({
      email:[null],
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

  onSubmit(){
    // this.formUsuario.value
    // console.log(this.formUsuario.value);
    // const token = window.localStorage.getItem('token');
    // console.log(token)
   
    return this.service.login(this.formUsuario.value).subscribe(data => 
      console.log(JSON.parse(JSON.stringify(data)).token.split())
    )
      // .subscribe(result => console.log(result),error => console.log(error))
  }
  onCancel() {
    this.submitted = false;
    this.form.reset();
    // console.log('onCancel');
  }

}
