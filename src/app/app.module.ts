import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular_material/material/material.module';


import { AppComponent } from './app.component';
import { VagasComponent } from './vagas/vagas.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { EmpresasCadastroComponent } from './empresas/empresas-cadastro/empresas-cadastro.component';



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
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
