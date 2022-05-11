import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasFormComponent } from './empresas-form/empresas-form.component';
import { LayoutEmpresaComponent } from './layout-empresa/layout-empresa.component';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';


const routes: Routes = [
  {path:'cadastro',component:EmpresasFormComponent},
  {path:'perfil/:nome',component:PerfilEmpresaComponent},
  {path:'editar/:id',component:EmpresasFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
