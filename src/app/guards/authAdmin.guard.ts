import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../service/admin.service';


@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  constructor(
    private _router:Router,
    private _adminService:AdminService
  ){

  }

  canActivate():any{
    let accessAdmin: boolean = this._adminService.isAdmin();
    if (!accessAdmin){
      return false;
      
    }

    return true;
  }
  
}
