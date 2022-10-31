import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-index-proveedor',
  templateUrl: './index-proveedor.component.html',
  styleUrls: ['./index-proveedor.component.css']
})
export class IndexProveedorComponent implements OnInit {

  public proveedores :Array<any>= [];
  public clientes_const  :Array<any>= [];
  public token = localStorage.getItem('token');
  public page = 1;
  public limit = 24;
  public filtro = '';
  constructor(
    private _adminService:AdminService
  ) { }

  ngOnInit(): void {
    this._adminService.listar_proveedores_paginate(this.token, this.limit,this.page).subscribe(
      response=>{ 
        this.proveedores = response.results;
      }
    );
  }

  filtrar_cliente(){
    if(this.filtro){
      var term = new RegExp(this.filtro.toString().trim() , 'i');
      this.proveedores = this.clientes_const.filter(item=>term.test(item.nombres)||term.test(item.apellidos)||term.test(item.email)||term.test(item.dni)||term.test(item.telefono)||term.test(item._id));
    }else{
      this.proveedores = this.clientes_const;
    }
  }

}
