import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './shared/material.module';
import { EmpresasModule } from './view/empresas/empresas.module';


import { AppComponent } from './app.component';
import { VagasComponent } from './view/vagas/todas-as-vagas/vagas.component';
import { UsuarioComponent } from './view/usuario/usuario.component';
import { CandidaturaComponent } from './view/vagas/candidatura/candidatura.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    VagasComponent,
    UsuarioComponent,
    CandidaturaComponent
  ],
  imports: [
    BrowserModule,
    EmpresasModule,
    HttpClientModule,
    MaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
