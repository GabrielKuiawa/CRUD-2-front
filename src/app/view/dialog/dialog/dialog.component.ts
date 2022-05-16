import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Vagas } from '../../vagas/vagas';
import { VagasService } from '../../vagas/vagas.service';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  form!:FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: Vagas,
    public dialogRef: MatDialogRef<DialogComponent>,
    private fb: FormBuilder,
    private service:VagasService
  ) { 
    this.form = this.fb.group({
      titulo:[null],
      salario:[null],
      descricao:[null],
      empresa_id:[this.service.getId()]
    })    
  }
 
  ngOnInit(): void {
    console.log(this.service.getId());
    
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  adicionar(){
    console.log(this.form.value);
    return this.service.save(this.form.value).subscribe(data => {
      this.onNoClick(); 
      console.log(data);
    },error =>{
      console.log('vaga não inserida',error)
    })   
  }
}
