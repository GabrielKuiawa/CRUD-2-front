import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../../dialog/dialog/dialog.component';
import { Vagas } from '../../vagas/vagas';

@Component({
  selector: 'app-layout-empresa',
  templateUrl: './layout-empresa.component.html',
  styleUrls: ['./layout-empresa.component.css']
})
export class LayoutEmpresaComponent implements OnInit {


  constructor
  (
    private router : Router,
    public dialog: MatDialog,
    private fb: FormBuilder

  ) { }

  ngOnInit(): void {
  }
  Logout() {
    localStorage.removeItem('token:empresa');
    localStorage.removeItem('id');
    this.router.navigate(['/']);
  }

  openDialog(criar:Vagas | null): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',data: criar === null       
    }); 
  }
}


