import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-empresa',
  templateUrl: './layout-empresa.component.html',
  styleUrls: ['./layout-empresa.component.css']
})
export class LayoutEmpresaComponent implements OnInit {

  constructor(
    private router : Router

  ) { }

  ngOnInit(): void {
  }
  Logout() {
    localStorage.removeItem('token:empresa');
    this.router.navigate(['/']);
  }

}
