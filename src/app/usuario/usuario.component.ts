import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() usuario!: Boolean ;
  
  constructor() { }


  ngOnInit(): void {
    console.log(this.usuario);
  }
  comum(){
    this.usuario = true
    return this.usuario
  }
  empresa(){
    this.usuario = false
    return this.usuario
  }


}
