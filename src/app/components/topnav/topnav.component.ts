import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
import { GLOBAL } from "../../service/GLOBAL";

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor(
    private _router:Router,
    private _adminService:AdminService
  ) { }

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
