import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { GLOBAL } from 'src/app/service/GLOBAL';
declare var iziToast:any;
declare var $:any;


@Component({
  selector: 'app-edit-solicitud',
  templateUrl: './edit-solicitud.component.html',
  styleUrls: ['./edit-solicitud.component.css']
})
export class EditSolicitudComponent implements OnInit {

  public id = '';
  public load_data = false;
  public producto: any = {
    idCategoria: '',
    visibilidad: ''
  };
  public productos: any[] = [];
  public imgSelect : any | ArrayBuffer = 'assets/img/01.jpg';
  public categorias: Array<any> = [];
  public config : any = {};
  public page = 1;
  public pageSize = 24;
  public load_btn = false;
  public load = false;
  public file : any = undefined;


  public arr_etiquetas: Array<any> = [];
  public token = localStorage.getItem('token');
  public new_etiqueta = '';
  public load_data_etiqueta = false;
  public etiquetas : Array<any> = [];
  public load_etiquetas = false;
  public url = GLOBAL.url;

  constructor(
    private _adminService:AdminService,
    private _router:Router,
    private _route : ActivatedRoute,
  ) { 
    this.config = {
      height: 500
    }
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      params=>{
    this.id = params['id'];
    this._adminService.listar_materias_primas_orden_paginate(this.token, this.id, this.pageSize, this.page).subscribe(
      response => {
        this.productos = response.results;
      }
    )})
  }


  actualizar(actualizarForm:any){
    console.log(actualizarForm)
    if(actualizarForm.valid){

      var data : any= {};

      if(this.file != undefined){
        data.portada = this.file;
      }
      data.idMateriaPrima = this.producto.materiaPrima;
      data.precio = this.producto.precio;
      
      this.load_btn = true;
    

      this._adminService.actualizar_materia_prima_proveedor_admin(data,this.token).subscribe(
        response=>{
          iziToast.show({
              title: 'SUCCESS',
              titleColor: '#1DC74C',
              color: '#FFF',
              class: 'text-success',
              position: 'topRight',
              message: 'Se actualizó correctamente la materia prima'
          });

          this.load_btn = false;

          this._router.navigate(['/inventario']);
        },
        error=>{
          this.load_btn = false;
        }
      )

    }else{
      iziToast.show({
          title: 'ERROR',
          titleColor: '#FF0000',
          color: '#FFF',
          class: 'text-danger',
          position: 'topRight',
          message: 'Los datos del formulario no son validos'
      });
      this.load_btn = false;
    }
}

}
