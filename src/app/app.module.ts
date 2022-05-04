import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular_material/material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { EmpresasCadastroComponent } from './empresas/empresas-cadastro/empresas-cadastro.component';
import { AppComponent } from './app.component';
import { VagasComponent } from './vagas/vagas.component';
import { EmpresasComponent } from './empresas/empresas.component';



@NgModule({
  declarations: [
    AppComponent,
    VagasComponent,
    EmpresasComponent,
    EmpresasCadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
