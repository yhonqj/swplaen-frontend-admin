import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './service/admin.service';
import { GLOBAL } from './service/GLOBAL';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin';
  constructor(
    private _adminService:AdminService,
    private _router:Router
  ){
    const token = localStorage.getItem('token');
  }

  ngOnInit(): void {
    if(!this._adminService.isAuthenticate()){
      this._router.navigate(['login']);
    };
  }

}
