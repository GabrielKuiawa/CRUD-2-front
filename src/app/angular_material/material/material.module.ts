import { NgModule } from '@angular/core';


// imports do angular material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  exports:[
    MatCardModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
