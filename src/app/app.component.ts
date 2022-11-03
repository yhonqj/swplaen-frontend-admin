import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './service/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin';
  constructor(
    private _adminService:AdminService,
    private _router:Router
  ){
  }

  ngOnInit(): void {

    if(localStorage.getItem('token') != null){
      const token = localStorage.getItem('token');
      this._adminService.obtener_info_profile_admin(token).subscribe(
        response => {
          localStorage.setItem('nombres',response.usuario.nombres);
          localStorage.setItem('apellidos',response.usuario.apellidos);
        },
        error => {
          localStorage.removeItem('token');
          localStorage.removeItem('nombres');
          localStorage.removeItem('apellidos');
        }
      )
    }
  }

}
