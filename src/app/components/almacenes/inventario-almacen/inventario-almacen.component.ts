import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AdminService } from 'src/app/service/admin.service';
declare var iziToast:any;
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-inventario-almacen',
  templateUrl: './inventario-almacen.component.html',
  styleUrls: ['./inventario-almacen.component.css']
})
export class InventarioAlmacenComponent implements OnInit {

  public id = '';
  public token :any= '';
  public almacen : any  = {};
  public inventarios : Array<any>=[];
  public variedades : Array<any>=[];
  public arr_inventario: Array<any>=[];
  public producto : any = {
    idProducto: '',
    fecha: ''
  };

  public load_btn = false;

  public page = 1;
  public pageSize = 40;

  public load_del = false;
  public load = true;

  constructor(
    private _route: ActivatedRoute,
    private _adminService: AdminService
  ) { 
    this.token = localStorage.getItem('token');

  }

  ngOnInit(): void {
    console.log(this.producto.fecha)
    this._route.params.subscribe(
      params=>{
        this.id = params['idAlmacen'];

        this.load = true;
        this.listar_variedades();
        this._adminService.obtener_almacen_admin(this.id,this.token).subscribe(
          response=>{
           if(response == undefined){
            this.almacen = undefined;
            this.load = false;
           }else{
             this.almacen = response;
             this.inventarios = response.productos;
             this.load = false;
           }
            
          }
        );
        
      }
    );
  }

  listar_variedades(){
    this._adminService.listar_productos_admin(this.token).subscribe(
      response=>{
        this.variedades = response;
        this.load = false;
      }
    );
  }

  registro_inventario(inventarioForm:any){
    if(inventarioForm.valid){
      let data = {
        idAlmacen: this.almacen._id,
        idProducto: this.producto.idProducto,
        stock: inventarioForm.value.cantidad,
        fecha: inventarioForm.value.fecha,
      }

      console.log(data);
      

      this._adminService.registro_inventario_producto_almacen_admin(data,this.token).subscribe(
        response=>{
          iziToast.show({
              title: 'SUCCESS',
              titleColor: '#1DC74C',
              color: '#FFF',
              class: 'text-success',
              position: 'topRight',
              message: 'Se agrego el nuevo stock al producto.'
          });

          this._adminService.obtener_almacen_admin(this.almacen._id,this.token).subscribe(
            response=>{
               this.inventarios = response.productos;
            }
          )
          
        },
        error=>{
          console.log(error);
          
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
    }
  }

}
