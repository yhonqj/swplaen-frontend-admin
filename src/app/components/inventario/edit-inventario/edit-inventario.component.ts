import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { GLOBAL } from 'src/app/service/GLOBAL';
declare var iziToast:any;
declare var $:any;


@Component({
  selector: 'app-edit-inventario',
  templateUrl: './edit-inventario.component.html',
  styleUrls: ['./edit-inventario.component.css']
})
export class EditInventarioComponent implements OnInit {

  public id = '';
  public load_data = false;
  public producto: any = {
    idCategoria: '',
    visibilidad: ''
  };
  public imgSelect : any | ArrayBuffer = 'assets/img/01.jpg';
  public categorias: Array<any> = [];
  public config : any = {};
  public load_btn = false;
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
    this._adminService.listar_categorias_materia_prima_admin(this.token).subscribe(
      response=>{
        this.categorias = response;
      }
    );

    this._route.params.subscribe(
      params=>{
        this.id = params['id'];
        console.log(this.id);
        this.load_data = true;
        this._adminService.obtener_materia_prima_admin(this.id,this.token).subscribe(
          response=>{
           if(response == undefined){
            this.load_data = false;
            this.producto = undefined;
            
           }else{
             this.load_data = false;
             this.producto = response;
             this.imgSelect = this.url +'obtener_portada/'+this.producto.portada;
           }
            
          },
          error=>{
            console.log(error);
            
          }
        );
        
      }
    );
  }


  actualizar(actualizarForm:any){
    console.log(actualizarForm)
    if(actualizarForm.valid){

      var data : any= {};

      if(this.file != undefined){
        data.portada = this.file;
      }
      data._id = this.producto._id;
      data.nombre = this.producto.nombre;
      data.descripcion = this.producto.descripcion;
      data.idCategoria = this.producto.idCategoria;
      
      this.load_btn = true;
    

      this._adminService.actualizar_materia_prima_admin(data,this.token).subscribe(
        response=>{
          iziToast.show({
              title: 'SUCCESS',
              titleColor: '#1DC74C',
              color: '#FFF',
              class: 'text-success',
              position: 'topRight',
              message: 'Se actualizó correctamente el nuevo producto.'
          });

          this.load_btn = false;

          this._router.navigate(['/productos']);
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
