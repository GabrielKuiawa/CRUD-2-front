import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
 import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  srcResult: any;
  form!:FormGroup;


  constructor(
    private fb: FormBuilder,
    private service:CadastroService,
    private router:Router,
    private snackBar: MatSnackBar,                          
  ) 
  { 
    this.form = this.fb.group({
      email:[null],
      nome:[null],
      senha:[null]
    })
  }

  ngOnInit(): void {
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
  cadastrar(){
    return this.service.save(this.form.value).subscribe(data =>{
      console.log(data);     
      this.onSuccess()
      this.router.navigate(['/']);
    },error =>{
      this.onError()
    })
  }
  private onSuccess() {
    this.snackBar.open('usuário cadastrada com sucesso!', '', { duration: 3000 });
  }
  private onError() {
    this.snackBar.open('Erro cadastrada usuário', '', { duration: 3000 });
  }

}
