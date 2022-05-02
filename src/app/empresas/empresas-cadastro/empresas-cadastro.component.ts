import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EmpresasService } from '../empresas.service';

@Component({
  selector: 'app-empresas-cadastro',
  templateUrl: './empresas-cadastro.component.html',
  styleUrls: ['./empresas-cadastro.component.css']
})
export class EmpresasCadastroComponent implements OnInit {
  form!: FormGroup;
  constructor(private service:EmpresasService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(
    )
  }

}
