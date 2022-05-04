import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasCadastroComponent } from './empresas/empresas-cadastro/empresas-cadastro.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { VagasComponent } from './vagas/vagas.component';

const routes: Routes = [
  {path:'vagas',component:VagasComponent},
  {path:'empresas',component:EmpresasComponent},
  {path:'empresas/cadastro',component:EmpresasCadastroComponent},
  {path:'empresas/editar',component:EmpresasCadastroComponent},
  {path:'empresas/editar/id',component:EmpresasCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
