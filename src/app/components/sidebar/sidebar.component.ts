import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { GLOBAL } from 'src/app/service/GLOBAL';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public GLOBAL;
  constructor(
    private _router:Router,
    private _adminService:AdminService
  ) { 
    this.GLOBAL = GLOBAL
  }

  ngOnInit(): void {
  }
  logout(){
    window.location.reload();
    localStorage.clear();
    this._router.navigate(['/']).then(() => {
      window.location.reload();
    });;
  }
}
