import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular_material/material/material.module';
import { CommonModule } from '@angular/common';


import { AppComponent } from './app.component';
import { VagasComponent } from './vagas/vagas.component';
import { EmpresasModule } from './empresas/empresas.module';



@NgModule({
  declarations: [
    AppComponent,
    VagasComponent
  ],
  imports: [
    BrowserModule,
    EmpresasModule,
    HttpClientModule,
    MaterialModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
