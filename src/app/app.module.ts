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
import { UsuarioComponent } from './view/usuario/usuario.component';
import { CandidaturaComponent } from './view/vagas/candidatura/candidatura.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    VagasComponent,
    UsuarioComponent,
    CandidaturaComponent,
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
  providers: [ {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
