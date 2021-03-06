import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthEmpresaGuard } from './guards/auth-empresa.guard';
import { AuthGuard } from './guards/authguard.guard';
import { DialogComponent } from './view/dialog/dialog/dialog.component';
import { LayoutEmpresaComponent } from './view/empresas/layout-empresa/layout-empresa.component';
import { CadastroEmpresaComponent } from './view/usuario/cadastro-empresa/cadastro-empresa.component';
import { CadastroComponent } from './view/usuario/cadastro_usuario/cadastro.component';
import { PerfilComponent } from './view/usuario/perfil/perfil.component';
import { UsuarioComponent } from './view/usuario/usuario_component/usuario.component';
import { VagasComponent } from './view/vagas/todas-as-vagas/vagas.component';

const routes: Routes = [
  {path:'',component:UsuarioComponent},
  {path:'cadastro',component:CadastroComponent},
  {path:'cadastro/empresa',component:CadastroEmpresaComponent},
  {path:'vagas',component:VagasComponent,canActivate:[AuthGuard]},
  {path:'perfil',component:PerfilComponent,canActivate:[AuthGuard]},
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
