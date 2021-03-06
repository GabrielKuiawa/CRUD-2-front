import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './shared/material.module';
import { EmpresasModule } from './view/empresas/empresas.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppComponent } from './app.component';
import { VagasComponent } from './view/vagas/todas-as-vagas/vagas.component';
import { UsuarioComponent } from './view/usuario/usuario_component/usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { CadastroComponent } from './view/usuario/cadastro_usuario/cadastro.component';
import { CadastroEmpresaComponent } from './view/usuario/cadastro-empresa/cadastro-empresa.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from './view/dialog/dialog/dialog.component';
import { PerfilComponent } from './view/usuario/perfil/perfil.component';




@NgModule({
  declarations: [
    AppComponent,
    VagasComponent,
    UsuarioComponent,
    CadastroComponent,
    CadastroEmpresaComponent,
    DialogComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    EmpresasModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ 
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
