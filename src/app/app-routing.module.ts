import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VagasComponent } from './vagas/vagas.component';

const routes: Routes = [
  {path:'vagas',component:VagasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
