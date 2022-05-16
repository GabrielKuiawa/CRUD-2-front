import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
    private service:VagasService,
    private snackBar: MatSnackBar,
  ) { 
    this.form = this.fb.group({
      id:[data.id_vag],
      titulo:[data.titulo],
      salario:[data.salario],
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
    return this.service.save(this.form.value).subscribe(data => {
      this.onSuccess()
      this.onNoClick(); 
    },error =>{
      this.onError()
    })   
  }
  private onSuccess() {
    this.snackBar.open('adicionado com sucesso!', '', { duration: 3000 });
  }
  private onError() {
    this.snackBar.open('Erro ao adicionar', '', { duration: 3000 });
  }
  
}
