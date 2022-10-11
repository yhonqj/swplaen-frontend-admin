import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/admin.service';
declare var $:any;
declare var iziToast:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public token : any = '';
  public admin = {
    email :'',
    password: ''
  }

  constructor(
    private _adminService:AdminService,
    private _router:Router
  ) { 
    this.token =localStorage.getItem('token');
  }

  ngOnInit(): void {
    $('body').addClass('align-items-center');
    if(this.token){
      this._router.navigate(['/clientes']);
    }else{
      //MANTENER EN EL COMPONENTE
    }
  }

  login(loginForm:any){
    
    if(loginForm.valid){
      let correo = loginForm.value.email;
      let password = loginForm.value.password;

      if(correo == '' && password == ''){
        iziToast.show({
          title: 'ERROR DATA',
          class:'iziToast-danger',
          position: 'topRight',
          message: 'Todos los campos son requeridos, vuelva a intentar.'
        });
      }else{
        this._adminService.login_admin({correo,password}).subscribe(
          response =>{
            console.log(response);
            if(response.token != null){
              localStorage.setItem('token',response.token);
              this._router.navigate(['/productos']);
            }else{
              iziToast.show({
                  title: 'ERROR USER',
                  class:'iziToast-danger',
                  position: 'topRight',
                  
              });
            }
            
          },
          error=>{
            iziToast.show({
                title: 'ERROR SERVER',
                class:'iziToast-danger',
                position: 'topRight',
                message: 'Ocurrió un error en el servidor, intente mas nuevamente.'
            });
          }
        );
      }
    }else{
      iziToast.show({
          title: 'ERROR DATA',
          class:'iziToast-danger',
          position: 'topRight',
          message: 'Complete correctamente el formulario.'
      });
    }
  }

  view_password(){
    let type = $('#password').attr('type');

    if(type == 'text'){
      $('#password').attr('type','password');
      
    }else if(type == 'password'){
      $('#password').attr('type','text');
    }
  }

}
