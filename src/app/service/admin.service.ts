import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { GLOBAL } from "./GLOBAL";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public url;

  constructor(
    private _http : HttpClient,
  ) {
    this.url = GLOBAL.url;
  }

  login_admin(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url + 'usuario/loginAdmin',data,{headers:headers});
  }

  listar_clientes_tienda(token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'listar_clientes_tienda',{headers:headers});
  }

  listar_categorias_producto(token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'categoriaProducto/getAll',{headers:headers});
  }

  obtener_info_profile_admin(token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','token':token});
    return this._http.get(this.url + 'usuario/getAdminProfile',{headers:headers});
  }
  
  listar_ordenes_paginate(token:any, limit: number, page: number):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'orden/getAllPaginate?limit='+limit+'&page='+page,{headers:headers});
  }

  listar_proveedores(token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'proveedor/getAll',{headers:headers});
  }

  listar_proveedores_paginate(token:any, limit: number, page: number):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'proveedor/getAllPaginate?limit='+limit+'&page='+page,{headers:headers});
  }

  listar_materias_primas_proveedor_paginate(token:any, id: string, limit: number, page: number):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'proveedor/getMateriasPrimasByIdPaginate?id='+id+'&limit='+limit+'&page='+page,{headers:headers});
  }

  get_categorias():Observable<any>{
    return this._http.get('./assets/categorias.json');
  }

  listar_etiquetas_admin(token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'listar_etiquetas_admin',{headers:headers});
  }

  eliminar_etiqueta_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.delete(this.url + 'eliminar_etiqueta_admin/'+id,{headers:headers});
  }

  agregar_etiqueta_admin(data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.post(this.url+'agregar_etiqueta_admin',data,{headers:headers});
  }

  registro_producto_tienda_admin(data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.patch(this.url+'tienda/addProducto',data,{headers:headers});
  }

  registro_orden(data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.post(this.url+'orden/add',data,{headers:headers});
  }

  registro_producto_admin(data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Authorization':token});
    return this._http.post(this.url+'producto/add',data,{headers:headers});
  }

  registro_materia_prima_admin(data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Authorization':token});
    return this._http.post(this.url+'materiaPrima/add',data,{headers:headers});
  }

  eliminar_producto(data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','token':token});
    return this._http.delete(this.url+'producto/remove',{headers:headers, body: data});
  }

  listar_productos_admin(token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'producto/getAll',{headers:headers});
  }

  listar_productos_paginate_admin(token:any, limit: number, page:number):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'producto/getAllPaginate?limit='+limit+'&page='+page,{headers:headers});
  }

  listar_materias_primas_paginate_admin(token:any, limit: number, page:number):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'materiaPrima/getAllPaginate?limit='+limit+'&page='+page,{headers:headers});
  }

  listar_almacenes_paginate_admin(token:any, limit: number, page:number):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'almacen/getAllPaginate?limit='+limit+'&page='+page,{headers:headers});
  }

  listar_almacenes_admin(token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'almacen/getAll',{headers:headers});
  }

  listar_tiendas_admin(token:any, limit: number, page:number):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'tienda/getAllPaginate?limit='+limit+'&page='+page,{headers:headers});
  }

  obtener_producto_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'producto/getById?id='+id,{headers:headers});
  }

  obtener_materia_prima_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'materiaPrima/getById?id='+id,{headers:headers});
  }

  obtener_producto_almacen_admin(id:any,idProducto:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'almacen/getProductoById?id='+id+'&idProducto='+idProducto,{headers:headers});
  }

  obtener_almacen_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'almacen/getById?id='+id,{headers:headers});
  }

  obtener_tienda_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'tienda/getById?id='+id,{headers:headers});
  }

  obtener_productos_tienda_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'tienda/getProductosById?id='+id,{headers:headers});
  }

  obtener_productos_almacen_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'almacen/getProductosById?id='+id,{headers:headers});
  }

  obtener_productos_tienda_paginate_admin(id:any,limit: number, page: number,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'tienda/getProductosByIdPaginate?id='+id+'&limit='+limit+'&page='+page,{headers:headers});
  }

  listar_etiquetas_producto_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'listar_etiquetas_producto_admin/'+id,{headers:headers});
  }

  listar_categorias_producto_admin(token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'categoriaProducto/getAll',{headers:headers});
  }

  listar_categorias_materia_prima_admin(token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'categoriaMateriaPrima/getAll',{headers:headers});
  }

  eliminar_etiqueta_producto_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.delete(this.url + 'eliminar_etiqueta_producto_admin/'+id,{headers:headers});
  }

  agregar_etiqueta_producto_admin(data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.post(this.url+'agregar_etiqueta_producto_admin',data,{headers:headers});
  }

  actualizar_producto_admin(data:any,token:any):Observable<any>{
    if(data.portada){
      let headers = new HttpHeaders({'Authorization':token});

      const fd = new FormData();
      fd.append('_id',data._id);
      fd.append('nombre',data.nombre);
      fd.append('descripcion',data.descripcion);
      fd.append('idCategoria',data.idCategoria);

      return this._http.put(this.url+'producto/update',fd,{headers:headers});
    }else{
      let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
      return this._http.put(this.url+'producto/update',data,{headers:headers});
    }
  }

  actualizar_materia_prima_admin(data:any,token:any):Observable<any>{
    if(data.portada){
      let headers = new HttpHeaders({'Authorization':token});

      const fd = new FormData();
      fd.append('_id',data._id);
      fd.append('nombre',data.nombre);
      fd.append('descripcion',data.descripcion);
      fd.append('idCategoria',data.idCategoria);

      return this._http.put(this.url+'materiaPrima/update',fd,{headers:headers});
    }else{
      let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
      return this._http.put(this.url+'materiaPrima/update',data,{headers:headers});
    }
  }

  
  actualizar_producto_almacen_admin(data:any,token:any):Observable<any>{
      let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
      return this._http.patch(this.url+'almacen/updateProducto',data,{headers:headers});
  }

  listar_variedades_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'listar_variedades_admin/'+id,{headers:headers});
  }

  actualizar_producto_variedades_admin(data:any,id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.put(this.url+'actualizar_producto_variedades_admin/'+id,data,{headers:headers});
  }

  eliminar_variedad_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.delete(this.url+'eliminar_variedad_admin/'+id,{headers:headers});
  }

  agregar_nueva_variedad_admin(data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.post(this.url+'agregar_nueva_variedad_admin',data,{headers:headers});
  }

  listar_inventario_producto_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url+'listar_inventario_producto_admin/'+id,{headers:headers});
  }

  registro_inventario_producto_almacen_admin(data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.patch(this.url+'almacen/addProducto',data,{headers:headers});
  }

  registro_inventario_producto_admin(data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.post(this.url+'registro_inventario_producto_admin',data,{headers:headers});
  }

  agregar_imagen_galeria_admin(id:any,data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Authorization':token});

    const fd = new FormData();
    fd.append('_id',data._id);
    fd.append('imagen',data.imagen);
    return this._http.put(this.url+'agregar_imagen_galeria_admin/'+id,fd,{headers:headers});
  }

  eliminar_imagen_galeria_admin(id:any,data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.put(this.url+'eliminar_imagen_galeria_admin/'+id,data,{headers:headers});
  }

  verificar_token(token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url+'verificar_token',{headers:headers});
  }

  registro_cupon_admin(data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.post(this.url+'registro_cupon_admin',data,{headers:headers});
  }

  listar_cupones_admin(token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'listar_cupones_admin',{headers:headers});
  }

  obtener_cupon_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url + 'obtener_cupon_admin/'+id,{headers:headers});
  }

  actualizar_cupon_admin(id:any,data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.put(this.url+'actualizar_cupon_admin/'+id,data,{headers:headers});
  }

  eliminar_cupon_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.delete(this.url + 'eliminar_cupon_admin/'+id,{headers:headers});
  }

  cambiar_vs_producto_admin(id:any,estado:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url+'cambiar_vs_producto_admin/'+id+'/'+estado,{headers:headers});
  }

  obtener_config_admin():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url + 'obtener_config_admin',{headers:headers});
  }

  actualizar_config_admin(data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.put(this.url + 'actualizar_config_admin',data,{headers:headers});
  }

  isAuthenticate(){
    const token : any = localStorage.getItem('token');
  
    try {
      const helper = new JwtHelperService();
      var decodedToken = helper.decodeToken(token);

      if(!token){
        localStorage.clear();
        return false;
      }

      if(!decodedToken){
        localStorage.clear();
        return false;
      }
    
      if(helper.isTokenExpired(token)){
        localStorage.clear();
        return false;
      }

    } catch (error) {
      console.log(error);
      
      localStorage.clear();
      return false;
    }

    return true;
  }

  obtener_ventas_admin(token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url+'obtener_ventas_admin',{headers:headers});
  }

  obtener_detalles_ordenes_cliente(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url+'obtener_detalles_ordenes_cliente/'+id,{headers:headers});
  }

  obtenerPago(id:any):Observable<any>{
    let headers = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Authorization','Bearer TEST-1565437970717712-100416-3da5767dad6b8dfef6c0563925dadf81-612621626');
    return this._http.get('https://api.mercadopago.com/v1/payments/'+id,{headers:headers});
  }

  marcar_finalizado_orden(id:any,data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.put(this.url+'marcar_finalizado_orden/'+id,data,{headers:headers});
  }

  eliminar_orden_admin(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.delete(this.url+'eliminar_orden_admin/'+id,{headers:headers});
  }
  marcar_envio_orden(id:any,data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.put(this.url+'marcar_envio_orden/'+id,data,{headers:headers});
  }

  confirmar_pago_orden(id:any,data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.put(this.url+'confirmar_pago_orden/'+id,data,{headers:headers});
  }

  obtener_direccion_todos_cliente(id:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url+'obtener_direccion_todos_cliente/'+id,{headers:headers});
  }

  registro_compra_manual_cliente(data:any,token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.post(this.url+'registro_compra_manual_cliente',data,{headers:headers});
  }

  listar_variedades_productos_admin(token:any):Observable<any>{
    let headers = new HttpHeaders({'Content-Type':'application/json','Authorization':token});
    return this._http.get(this.url+'listar_variedades_productos_admin',{headers:headers});
  }
}
