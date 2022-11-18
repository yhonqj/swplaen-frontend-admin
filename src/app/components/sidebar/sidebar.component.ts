import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public almacenero = false;
  public administrador = false;
  public proveedor = false;
  constructor(
    private _router:Router,
    private _adminService:AdminService
  ) { 
    this.almacenero = _adminService.isAlmacenero()
    this.administrador = _adminService.isAdmin()
    this.proveedor = _adminService.isProveedor()
  }

  ngOnInit(): void {
  }
  logout(){
    window.location.reload();
    localStorage.clear();
    this._router.navigate(['/']).then(() => {
      window.location.reload();
    });;
  }
}
