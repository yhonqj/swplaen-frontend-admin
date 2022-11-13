import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AdminService } from 'src/app/service/admin.service';
declare var iziToast:any;
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-movimiento-almacen',
  templateUrl: './movimiento-almacen.component.html',
  styleUrls: ['./movimiento-almacen.component.css']
})
export class MovimientoAlmacenComponent implements OnInit {

  public id = '';
  public idProducto = '';
  public token :any= '';
  public almacen : any  = {};
  public inventarios : Array<any>=[];
  public tipoMovimientos : Array<any>=[];
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
    private _adminService: AdminService,
    private datePipe: DatePipe
  ) { 
    this.token = localStorage.getItem('token');

  }

  ngOnInit(): void {
    console.log(this.producto.fecha)
    this._route.params.subscribe(
      params=>{
        this.id = params['idAlmacen'];
        this.idProducto = params['id'];
        this.load = true;
        this._adminService.listar_tipo_movimientos(this.token).subscribe(
          (response: any) => {
            this.tipoMovimientos = response;
          }
        )
        this._adminService.obtener_movimientos_producto_almacen_admin(this.id,this.idProducto,10,1,this.token).subscribe(
          response=>{
           if(response == undefined){
            this.almacen = undefined;
            this.load = false;
           }else{
             this.inventarios = response.results;
             for(let i = 0; i < this.inventarios.length; i++){
              if (this.inventarios[i].fecha != null){
                this.inventarios[i].fechaString = this.datePipe.transform(this.inventarios[i].fecha, 'dd-MM-yyyy','UTC+5');
                this.inventarios[i].tipoMovimientoString = this.tipoMovimientos[this.inventarios[i].tipoMovimiento - 1].nombre
              }
            }
             this.load = false;
           }
            
          }
        );
        
      }
    );
  }

}
