import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-index-orden',
  templateUrl: './index-orden.component.html',
  styleUrls: ['./index-orden.component.css']
})
export class IndexOrdenComponent implements OnInit {

  public ordenes :Array<any>= [];
  public clientes_const  :Array<any>= [];
  public token = localStorage.getItem('token');
  public page = 1;
  public limit = 24;
  public filtro = '';
  constructor(
    private _adminService:AdminService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this._adminService.listar_ordenes_paginate(this.token,this.limit,this.page).subscribe(
      response=>{
        this.ordenes= response.results;
        for(let i = 0; i < this.ordenes.length; i++){
          if (this.ordenes[i].fechaEntrega != null){
            this.ordenes[i].fechaEntregaString = this.datePipe.transform(this.ordenes[i].fechaEntrega, 'dd-MM-yyyy');
          }
        }
      }
    );
  }

}
