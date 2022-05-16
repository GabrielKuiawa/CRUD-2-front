import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasRoutingModule } from './empresas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VagasEmpresaComponent } from './vagas-empresa/vagas-empresa.component';
import { LayoutEmpresaComponent } from './layout-empresa/layout-empresa.component';
import { MaterialModule } from 'src/app/shared/material.module';



@NgModule({
  declarations: [
    VagasEmpresaComponent,
    LayoutEmpresaComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports:[
    LayoutEmpresaComponent,
    VagasEmpresaComponent
  ]
})
export class EmpresasModule { }
