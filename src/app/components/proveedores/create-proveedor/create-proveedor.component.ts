import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
declare var iziToast: any;
declare var $: any;

@Component({
  selector: 'app-create-proveedor',
  templateUrl: './create-proveedor.component.html',
  styleUrls: ['./create-proveedor.component.css']
})
export class CreateProveedorComponent implements OnInit {

  public proveedor: any = {
    categoriaProducto: ''
  };
  public imgSelect: any | ArrayBuffer = 'assets/img/01.jpg';
  public categorias: Array<any> = [];
  public config: any = {};
  public load_btn = false;
  public file: any = undefined;


  public arr_etiquetas: Array<any> = [];
  public token = localStorage.getItem('token');
  public new_etiqueta = '';
  public load_data_etiqueta = false;
  public etiquetas: Array<any> = [];

  constructor(
    private _adminService: AdminService,
    private _router: Router
  ) {
    this.config = {
      height: 500
    }
  }

  ngOnInit(): void {
    this._adminService.listar_categorias_producto_admin(this.token).subscribe(
      response => {
        this.categorias = response;
        console.log(response);

      }
    );
    this.listar_etiquetas();
  }

  listar_etiquetas() {
    this.load_data_etiqueta = true;
    this._adminService.listar_etiquetas_admin(this.token).subscribe(
      response => {
        this.etiquetas = response.data;
        console.log(response);
        this.load_data_etiqueta = false;
      }
    );
  }


  agregar_etiqueta() {
    let arr_label = this.new_etiqueta.split('_');

    this.arr_etiquetas.push({
      etiqueta: arr_label[0],
      titulo: arr_label[1]
    });
    this.new_etiqueta = '';
  }

  eliminar_etiqueta(idx: any) {
    this.arr_etiquetas.splice(idx, 1)
  }

  registro(registroForm: any) {
    if (registroForm.valid) {

      this.load_btn = true;

      this._adminService.registro_proveedor_admin(this.proveedor, this.token).subscribe(
        response => {
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
              message: 'Se registro correctamente el nuevo proveedor.'
            });
            this.load_btn = false;

            this._router.navigate(['/proveedores']);
          }
        },
        error => {
          iziToast.show({
            title: 'ERROR',
            titleColor: '#FF0000',
            color: '#FFF',
            class: 'text-danger',
            position: 'topRight',
            message: error.error.message
          });
          this.load_btn = false;
        }
      );

      this.load_btn = false;


    } else {

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
