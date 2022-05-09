import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresasService } from '../empresas/empresas.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() usuario!: Boolean ;
  srcResult: any;
  form!: FormGroup;
  submitted = false;
  
  constructor(
    private service:EmpresasService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) 
  { 
    this.form = this.fb.group({
      nome:[null],
      image:[null]      
    });
  }


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
    this.service.save(this.form.value)
      .subscribe(result => console.log(result),error => console.log(error))
  }
  onCancel() {
    this.submitted = false;
    this.form.reset();
    // console.log('onCancel');
  }

}
