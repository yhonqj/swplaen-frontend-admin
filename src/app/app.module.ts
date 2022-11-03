import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from "./app.routing";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule,NgbPaginationModule  } from "@ng-bootstrap/ng-bootstrap";
import { NgxTinymceModule } from 'ngx-tinymce';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { IndexClientesComponent } from './components/clientes/index-clientes/index-clientes.component';
import { IndexProductoComponent } from './components/productos/index-producto/index-producto.component';
import { IndexProveedorComponent } from './components/proveedores/index-proveedor/index-proveedor.component';
import { IndexAlmacenComponent } from './components/almacenes/index-almacen/index-almacen.component';
import { CreateProductoComponent } from './components/productos/create-producto/create-producto.component';
import { EditProductoComponent } from './components/productos/edit-producto/edit-producto.component';
import { ConfigComponent } from './components/config/config.component';
import { IndexTiendaComponent } from './components/tiendas/index-tienda/index-tienda.component';
import { InventarioAlmacenComponent } from './components/almacenes/inventario-almacen/inventario-almacen.component';
import { InventarioTiendaComponent } from './components/tiendas/inventario-tienda/inventario-tienda.component';
import { EditInventarioComponent } from './components/almacenes/edit-inventario/edit-inventario.component';
import { CreateInventarioComponent } from "./components/tiendas/create-inventario/create-inventario.component";
import { InventarioProveedorComponent } from './components/proveedores/inventario-proveedor/inventario-proveedor.component';
import { CreateOrdenComponent } from './components/ordenes/create-orden/create-orden.component';
import { IndexOrdenComponent } from './components/ordenes/index-orden/index-orden.component';
import { InicioAlmacenComponent } from './components/almacenes/inicio-almacen/inicio-almacen.component';
import { DatePipe } from '@angular/common';
import { IndexMateriaPrimaComponent } from './components/materiasprimas/index-materia-prima/index-materia-prima.component';
import { EditMateriaPrimaComponent } from './components/materiasprimas/edit-materia-prima/edit-materia-prima.component';
import { CreateMateriaPrimaComponent } from './components/materiasprimas/create-materia-prima/create-materia-prima.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    TopnavComponent,
    IndexClientesComponent,
    IndexProductoComponent,
    IndexAlmacenComponent,
    IndexTiendaComponent,
    InventarioAlmacenComponent,
    InventarioTiendaComponent,
    CreateProductoComponent,
    EditProductoComponent,
    ConfigComponent,
    EditInventarioComponent,
    CreateInventarioComponent,
    IndexProveedorComponent,
    InventarioProveedorComponent,
    CreateOrdenComponent,
    IndexOrdenComponent,
    InicioAlmacenComponent,
    IndexMateriaPrimaComponent,
    EditMateriaPrimaComponent,
    CreateMateriaPrimaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    FormsModule,
    HttpClientModule,
    NgbPaginationModule,
    NgxTinymceModule.forRoot({
      baseURL: '../../../assets/tinymce/',
    }),
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
