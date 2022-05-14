import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutEmpresaComponent } from './layout-empresa/layout-empresa.component';
import { PerfilEmpresaComponent } from './perfil-empresa/perfil-empresa.component';


const routes: Routes = [
  {path:'perfil/:nome',component:PerfilEmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
