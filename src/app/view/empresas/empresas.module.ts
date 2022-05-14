import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasRoutingModule } from './empresas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';
import { VagasEmpresaComponent } from './vagas-empresa/vagas-empresa.component';
import { LayoutEmpresaComponent } from './layout-empresa/layout-empresa.component';
import { MaterialModule } from 'src/app/shared/material.module';



@NgModule({
  declarations: [
    PerfilEmpresaComponent,
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
    PerfilEmpresaComponent,
    VagasEmpresaComponent
  ]
})
export class EmpresasModule { }
