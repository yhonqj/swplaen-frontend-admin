import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { GLOBAL } from 'src/app/service/GLOBAL';
declare var iziToast:any;
declare var $:any;

@Component({
  selector: 'app-index-inventario', 
  templateUrl: './index-inventario.component.html',
  styleUrls: ['./index-inventario.component.css']
})
export class IndexInventarioComponent implements OnInit {

  public productos :Array<any>= [];
  public productos_const  :Array<any>= [];
  public token = localStorage.getItem('token');
  public page = 1;
  public pageSize = 24;
  public filtro = '';

  public load_btn_etiqueta =false;
  public load_data_etiqueta =false;
  public nueva_etiqueta = '';
  public etiquetas : Array<any> = [];
  public load_del_etiqueta = false;
  public load_btn = false;
  public load = false;

  public load_estado = false;
  public url = GLOBAL.url;

  constructor(
    private _adminService:AdminService
  ) { }

  ngOnInit(): void {
    this.init_data();
  }

  init_data(){
    this.load = true;
    this._adminService.proveedor_listar_materias_primas_paginate_admin(this.token,this.pageSize, this.page).subscribe(
      response=>{
        this.productos= response.results;
        this.load = false;
      }
    );
  }

  eliminar_producto(id: any){
    const data = {
      id
    }
    this._adminService.eliminar_materia_prima(data, this.token).subscribe(
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
          this.load_btn = false;
        } else {
          iziToast.show({
            title: 'SUCCESS',
            titleColor: '#1DC74C',
            color: '#FFF',
            class: 'text-success',
            position: 'topRight',
            message: 'Se eliminó correctamente la materia prima'
          });
          this.load_btn = false;
          this.init_data();
          
        }
      },
      (error: any) => {
        this.load_btn = false;
      }
    );
  }
}
