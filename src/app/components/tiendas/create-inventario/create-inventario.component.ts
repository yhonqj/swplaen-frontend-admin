import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
declare var iziToast:any;
declare var $:any;

@Component({
  selector: 'app-create-inventario',
  templateUrl: './create-inventario.component.html',
  styleUrls: ['./create-inventario.component.css']
})
export class CreateInventarioComponent implements OnInit {

  public imgSelect : any | ArrayBuffer = 'assets/img/01.jpg';
  public almacenes: Array<any> = [];
  public productos: Array<any> = [];
  public almacen: any ={_id:''};
  public cantidad: number = 0;
  public precio: number = 0;
  public producto: any = { idProducto: ''};
  public stock: number = 0;
  public config : any = {};
  public load_btn = false;
  public file : any = undefined;
  public idTienda: string = '';

  public arr_etiquetas: Array<any> = [];
  public token = localStorage.getItem('token');
  public new_etiqueta = '';
  public load_data_etiqueta = false;
  public etiquetas : Array<any> = [];

  constructor(
    private _route: ActivatedRoute,
    private _adminService:AdminService,
    private _router:Router
  ) { 
    this.config = {
      height: 500
    }
  }

  ngOnInit(): void {
    this._route.params.subscribe(
      params=>{
        this.idTienda = params['idTienda'];
    this._adminService.listar_almacenes_admin(this.token).subscribe(
      response=>{
        this.almacenes = response;
        console.log(response);
      }
    );
      }
    )
  }

  listar_productos_almacen(){
    this._adminService.obtener_productos_almacen_admin(this.almacen._id,this.token).subscribe(
      response=>{
        this.productos = response;
      }
    )
  }

  obtener_producto(){
    for (let i = 0; i< this.productos.length; i++){
      if (this.productos[i].idProducto === this.producto.idProducto){
        this.stock = this.productos[i].stock;
        break;
      }
    }
    
  }

  fileChangeEvent(event:any):void{
    var file :any;
    if(event.target.files && event.target.files[0]){
      file = <File>event.target.files[0];
    }else{
      iziToast.show({
          title: 'ERROR',
          titleColor: '#FF0000',
          color: '#FFF',
          class: 'text-danger',
          position: 'topRight',
          message: 'No hay un imagen de envio'
      });
    }

    if(file.size <= 4000000){

      if(file.type == 'image/png' || file.type == 'image/webp' || file.type == 'image/jpg' || file.type == 'image/gif' || file.type == 'image/jpeg'){
    
        const reader = new FileReader();
        reader.onload = e => this.imgSelect = reader.result;
        console.log(this.imgSelect);
        
        reader.readAsDataURL(file);

        $('#input-portada').text(file.name);
        this.file = file;

      }else{
        iziToast.show({
            title: 'ERROR',
            titleColor: '#FF0000',
            color: '#FFF',
            class: 'text-danger',
            position: 'topRight',
            message: 'El archivo debe ser una imagen'
        });
        $('#input-portada').text('Seleccionar imagen');
        this.imgSelect = 'assets/img/01.jpg';
        this.file = undefined;
      }
    }else{
      iziToast.show({
          title: 'ERROR',
          titleColor: '#FF0000',
          color: '#FFF',
          class: 'text-danger',
          position: 'topRight',
          message: 'La imagen no puede superar los 4MB'
      });
      $('#input-portada').text('Seleccionar imagen');
      this.imgSelect = 'assets/img/01.jpg';
      this.file = undefined;
    }
    
    console.log(this.file);
    
  }

  registro(registroForm:any){
    if(registroForm.valid){
        this.load_btn = true;
        let data = {
          precio: this.precio,
          idProducto: this.producto.idProducto,
          idAlmacen: this.almacen._id,
          cantidad: this.cantidad,
          idTienda: this.idTienda
        }
        this._adminService.registro_producto_tienda_admin(data,this.token).subscribe(
          response=>{
            if(response == undefined){
              iziToast.show({
                  title: 'ERROR',
                  titleColor: '#FF0000',
                  color: '#FFF',
                  class: 'text-danger',
                  position: 'topRight',
                  message: response.message
              });
              this.load_btn = false;
            }else{
              iziToast.show({
                  title: 'SUCCESS',
                  titleColor: '#1DC74C',
                  color: '#FFF',
                  class: 'text-success',
                  position: 'topRight',
                  message: 'Se registro correctamente el nuevo producto.'
              });
              this.load_btn = false;

              this._router.navigate(['/tiendas/inventario/',this.idTienda]);
            }
          },
          error=>{
            this.load_btn = false;
          }
        );

        this.load_btn = false;
      
      
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
