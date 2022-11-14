import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './service/admin.service';
import { GLOBAL } from './service/GLOBAL';

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
    const token = localStorage.getItem('token');
    this._adminService.obtener_info_profile_admin(token).subscribe(
      response=>{
        GLOBAL.tipoUsuario = response.usuario.tipoUsuario;
        GLOBAL.nombres = response.usuario.nombres;
        GLOBAL.apellidos = response.usuario.apellidos;
        GLOBAL.administrador = this._adminService.isAdmin();
        GLOBAL.almacenero = this._adminService.isAlmacenero();
        GLOBAL.proveedor = this._adminService.isProveedor();
       },
       error=>{
       }
    )
  }

  ngOnInit(): void {
    if(!this._adminService.isAuthenticate()){
      this._router.navigate(['login']);
    };
  }

}
