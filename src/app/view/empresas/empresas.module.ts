import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasFormComponent } from './empresas-form/empresas-form.component';
import { EmpresasRoutingModule } from './empresas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';
import { VagasEmpresaComponent } from './vagas-empresa/vagas-empresa.component';
import { LayoutEmpresaComponent } from './layout-empresa/layout-empresa.component';



@NgModule({
  declarations: [
    EmpresasFormComponent,
    PerfilEmpresaComponent,
    VagasEmpresaComponent,
    LayoutEmpresaComponent
  ],
  imports: [
    CommonModule,
    EmpresasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    LayoutEmpresaComponent,
    EmpresasFormComponent
  ]
})
export class EmpresasModule { }
