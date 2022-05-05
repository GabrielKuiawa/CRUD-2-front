import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasCadastroComponent } from './empresas-cadastro/empresas-cadastro.component';
import { EmpresasComponent } from './empresas.component';


const routes: Routes = [
  {path:'',component:EmpresasComponent},
  {path:'cadastro',component:EmpresasCadastroComponent},
  {path:'editar/:id',component:EmpresasCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresasRoutingModule { }
