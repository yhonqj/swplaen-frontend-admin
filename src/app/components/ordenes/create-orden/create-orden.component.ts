import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
declare var iziToast: any;
@Component({
  selector: 'app-create-orden',
  templateUrl: './create-orden.component.html',
  styleUrls: ['./create-orden.component.css']
})
export class CreateOrdenComponent implements OnInit {

  public proveedores: Array<any> = [];
  public solicitud: Array<any> = [];
  public materiasPrimas: Array<any> = [];
  public proveedor: any = { _id: '' };
  public observacion: string = '';
  public token = localStorage.getItem('token');
  public page = 1;
  public limit = 24;
  public load_btn = false;
  public filtro = '';
  constructor(
    private _adminService: AdminService,
    private _router:Router,
  ) { }

  ngOnInit(): void {
    this._adminService.listar_proveedores(this.token).subscribe(
      response => {
        console.log(response);
        this.proveedores = response;
      }
    );
  }

  listar_materias_primas_proveedor() {
    this.materiasPrimas = [];
    this.solicitud = [];
    for (let i = 0; i < this.proveedores.length; i++) {
      if (this.proveedor._id === this.proveedores[i]._id) {
        this.proveedor = this.proveedores[i];
        break;
      }
    }
    this._adminService.listar_materias_primas_proveedor_paginate(this.token, this.proveedor._id, this.limit, this.page).subscribe(
      response => {
        this.materiasPrimas = response.results;
      }
    )
  }

  agregar_materia_prima(item: any) {
    this.solicitud.push({ cantidadSolicitud: item.cantidad, nombreSolicitud: item.nombre, idSolicitud: item._id, precioSolicitud: item.precio });
  }

  registrar_solicitud() {
    let error = false;
    let message = "";
    let materiasPrimas: any[] = [];
    for (let i = 0; i < this.solicitud.length; i++) {
      if (this.solicitud[i].cantidadSolicitud <= 0 || this.solicitud[i].cantidadSolicitud === null || this.solicitud[i].cantidadSolicitud === undefined) {
        error = true;
        message = "La cantidad no puede ser menor o igual a cero"
        break;
      }
      if (this.solicitud[i].precioSolicitud <= 0 || this.solicitud[i].precioSolicitud === null || this.solicitud[i].precioSolicitud === undefined) {
        error = true;
        message = "El precio no puede ser menor o igual a cero"
        break;
      }
      materiasPrimas.push({materiaPrima: this.solicitud[i].idSolicitud, cantidad: this.solicitud[i].cantidadSolicitud, precio: this.solicitud[i].precioSolicitud})
    }

    if (error) {
      iziToast.show({
        title: 'ERROR',
        titleColor: '#FF0000',
        color: '#FFF',
        class: 'text-danger',
        position: 'topRight',
        message
      });
      materiasPrimas = [];
    }
    else {
      
      let data: any = {
        materiasPrimas,
        proveedor: this.proveedor._id
      }
      if (this.observacion !== "" && this.observacion !== null && this.observacion !== undefined) {
        data.observacion = this.observacion
      }

      this._adminService.registro_orden(data, this.token).subscribe(
        (response: any) => {
          iziToast.show({
            title: 'SUCCESS',
            titleColor: '#1DC74C',
            color: '#FFF',
            class: 'text-success',
            position: 'topRight',
            message: 'Se registró correctamente la orden de compra'
          });

          this.load_btn = false;

          this._router.navigate(['/productos']);
        },
        (error: any) => {
          this.load_btn = false;
        }
      )
  }
}

}
