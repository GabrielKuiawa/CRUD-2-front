import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpresasService } from '../../empresas/empresas.service';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css']
})
export class CadastroEmpresaComponent implements OnInit {
  srcResult: any;
  form!:FormGroup;

  constructor(
    private fb: FormBuilder,
    private service:EmpresasService,
    private router:Router
  )
  {
    this.form = this.fb.group({
      cnpj:[null],
      nome:[null],
      senha:[null]
    })    
  }

  ngOnInit(): void {
  }
 
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
    console.log(this.form.value);
    return this.service.save(this.form.value).subscribe(data =>  {
      console.log(data);     
      this.router.navigate(['/']);

      },error =>{
        console.log('erro em cadastrar ')
      }
    )
  }
}
