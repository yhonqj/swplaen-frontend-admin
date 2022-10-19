import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AdminService } from 'src/app/service/admin.service';
declare var iziToast:any;
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-inventario-tienda',
  templateUrl: './inventario-tienda.component.html',
  styleUrls: ['./inventario-tienda.component.css']
})
export class InventarioTiendaComponent implements OnInit {

  public id = '';
  public token :any= '';
  public tienda : any  = {};
  public inventarios : Array<any>=[];
  public variedades : Array<any>=[];
  public arr_inventario: Array<any>=[];
  public producto : any = {
    idProducto: '',
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
    this._route.params.subscribe(
      params=>{
        this.id = params['idTienda'];

        this.load = true;
        this.listar_variedades();
        this._adminService.obtener_tienda_admin(this.id,this.token).subscribe(
          response=>{
           if(response == undefined){
            this.tienda = undefined;
            this.load = false;
           }else{
             this.tienda = response;
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
        idAlmacen: this.tienda._id,
        idProducto: this.producto.idProducto,
        stock: inventarioForm.value.cantidad,
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

          this._adminService.obtener_almacen_admin(this.tienda._id,this.token).subscribe(
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
