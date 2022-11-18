import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
declare var iziToast: any;
declare var $: any;

@Component({
  selector: 'app-create-inventario',
  templateUrl: './create-inventario.component.html',
  styleUrls: ['./create-inventario.component.css']
})
export class CreateInventarioComponent implements OnInit {

  public producto: any = {
    idMateriaPrima: ''
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
    this._adminService.listar_materias_primas_admin(this.token).subscribe(
      response => {
        this.categorias = response;
        console.log(response);
      }
    );
  }

  registro(registroForm: any) {
    if (registroForm.valid) {

      this.load_btn = true;
      console.log(this.producto)
      this._adminService.registro_materia_prima_proveedor_admin(this.producto, this.token).subscribe(
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
              message: 'Se registro correctamente la materia prima'
            });
            this.load_btn = false;

            this._router.navigate(['/inventario']);
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
