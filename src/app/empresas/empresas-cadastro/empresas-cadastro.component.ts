import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpresasService } from '../empresas.service';

@Component({
  selector: 'app-empresas-cadastro',
  templateUrl: './empresas-cadastro.component.html',
  styleUrls: ['./empresas-cadastro.component.css']
})
export class EmpresasCadastroComponent implements OnInit {
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
  };

  

  ngOnInit(): void {
    
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
