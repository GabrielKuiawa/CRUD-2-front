import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthEmpresaGuard } from './guards/auth-empresa.guard';
import { AuthGuard } from './guards/authguard.guard';
import { LayoutEmpresaComponent } from './view/empresas/layout-empresa/layout-empresa.component';
import { UsuarioComponent } from './view/usuario/usuario.component';
import { CandidaturaComponent } from './view/vagas/candidatura/candidatura.component';
import { VagasComponent } from './view/vagas/todas-as-vagas/vagas.component';

const routes: Routes = [
  {path:'',component:UsuarioComponent},
  {path:'vagas',component:VagasComponent,canActivate:[AuthGuard]},
  {path:'vagas/candidatura',component:CandidaturaComponent},
  {path:'empresa',component:LayoutEmpresaComponent,canActivate:[AuthEmpresaGuard]},
  {path:'empresas',
  loadChildren: () => import('./view/empresas/empresas.module').then(m => m.EmpresasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
