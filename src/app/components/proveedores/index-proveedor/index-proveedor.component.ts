import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
declare var iziToast:any;

@Component({
  selector: 'app-index-proveedor',
  templateUrl: './index-proveedor.component.html',
  styleUrls: ['./index-proveedor.component.css']
})
export class IndexProveedorComponent implements OnInit {

  public proveedores :Array<any>= [];
  public clientes_const  :Array<any>= [];
  public token = localStorage.getItem('token');
  public page = 1;
  public limit = 24;
  public filtro = '';
  constructor(
    private _adminService:AdminService
  ) { }

  ngOnInit(): void {
    this._adminService.listar_proveedores_paginate(this.token, this.limit,this.page).subscribe(
      response=>{ 
        this.proveedores = response.results;
      }
    );
  }

  eliminar_proveedor(id: any){
    const data = {
      id
    }
    this._adminService.eliminar_proveedor(data, this.token).subscribe(
      (response: any) => {
        if (response == undefined) {
          iziToast.show({
            title: 'ERROR',
            titleColor: '#FF0000',
            color: '#FFF',
            class: 'text-danger',
            position: 'topRight',
            message: response.message
          });
        } else {
          iziToast.show({
            title: 'SUCCESS',
            titleColor: '#1DC74C',
            color: '#FFF',
            class: 'text-success',
            position: 'topRight',
            message: 'Se eliminó correctamente el proveedor'
          });
          this._adminService.listar_proveedores_paginate(this.token, this.limit,this.page).subscribe(
            response=>{ 
              this.proveedores = response.results;
            }
          );
        }
      },
      (error: any) => {
        iziToast.show({
          title: 'ERROR',
          titleColor: '#FF0000',
          color: '#FFF',
          class: 'text-danger',
          position: 'topRight',
          message: error.error.message
        });
      }
    );
  }

}
