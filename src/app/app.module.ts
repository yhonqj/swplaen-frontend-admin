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
import { IndexAlmacenComponent } from './components/almacenes/index-almacen/index-almacen.component';
import { CreateProductoComponent } from './components/productos/create-producto/create-producto.component';
import { EditProductoComponent } from './components/productos/edit-producto/edit-producto.component';
import { VariedadesProductoComponent } from './components/productos/variedades-producto/variedades-producto.component';
import { InventarioProductoComponent } from './components/productos/inventario-producto/inventario-producto.component';
import { GaleriaProductoComponent } from './components/productos/galeria-producto/galeria-producto.component';
import { IndexCuponComponent } from './components/cupones/index-cupon/index-cupon.component';
import { CreateCuponComponent } from './components/cupones/create-cupon/create-cupon.component';
import { EditCuponComponent } from './components/cupones/edit-cupon/edit-cupon.component';
import { ConfigComponent } from './components/config/config.component';
import { IndexVentasComponent } from './components/ventas/index-ventas/index-ventas.component';
import { IndexTiendaComponent } from './components/tiendas/index-tienda/index-tienda.component';
import { ShowVentasComponent } from './components/ventas/show-ventas/show-ventas.component';
import { CreateVentasComponent } from './components/ventas/create-ventas/create-ventas.component';
import { InventarioAlmacenComponent } from './components/almacenes/inventario-almacen/inventario-almacen.component';
import { InventarioTiendaComponent } from './components/tiendas/inventario-tienda/inventario-tienda.component';
import { EditInventarioComponent } from './components/almacenes/edit-inventario/edit-inventario.component';
import { CreateInventarioComponent } from "./components/tiendas/create-inventario/create-inventario.component";

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
    VariedadesProductoComponent,
    InventarioProductoComponent,
    GaleriaProductoComponent,
    IndexCuponComponent,
    CreateCuponComponent,
    EditCuponComponent,
    ConfigComponent,
    IndexVentasComponent,
    ShowVentasComponent,
    CreateVentasComponent,
    EditInventarioComponent,
    CreateInventarioComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
