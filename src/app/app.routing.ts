import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { IndexClientesComponent } from "./components/clientes/index-clientes/index-clientes.component";
import { IndexProductoComponent } from "./components/productos/index-producto/index-producto.component";
import { IndexAlmacenComponent } from "./components/almacenes/index-almacen/index-almacen.component";
import { IndexTiendaComponent } from "./components/tiendas/index-tienda/index-tienda.component";
import { InventarioAlmacenComponent } from "./components/almacenes/inventario-almacen/inventario-almacen.component";
import { InventarioTiendaComponent } from "./components/tiendas/inventario-tienda/inventario-tienda.component";
import { CreateProductoComponent } from "./components/productos/create-producto/create-producto.component";
import { EditProductoComponent } from "./components/productos/edit-producto/edit-producto.component";
import { AuthGuard } from "../app/guards/auth.guard";
import { ConfigComponent } from "./components/config/config.component";
import { IndexProveedorComponent } from './components/proveedores/index-proveedor/index-proveedor.component';
import { InventarioProveedorComponent } from "./components/proveedores/inventario-proveedor/inventario-proveedor.component";
import { CreateOrdenComponent } from "./components/ordenes/create-orden/create-orden.component";
import { IndexOrdenComponent } from "./components/ordenes/index-orden/index-orden.component";
import { InicioAlmacenComponent } from "./components/almacenes/inicio-almacen/inicio-almacen.component";
import { IndexMateriaPrimaComponent } from "./components/materiasprimas/index-materia-prima/index-materia-prima.component";
import { CreateMateriaPrimaComponent } from "./components/materiasprimas/create-materia-prima/create-materia-prima.component";
import { EditMateriaPrimaComponent } from "./components/materiasprimas/edit-materia-prima/edit-materia-prima.component";
import { EditProveedorComponent } from "./components/proveedores/edit-proveedor/edit-proveedor.component";
import { CreateProveedorComponent } from "./components/proveedores/create-proveedor/create-proveedor.component";
import { MovimientoAlmacenComponent } from "./components/almacenes/movimiento-almacen/movimiento-almacen.component";
import { AuthAdminGuard } from "./guards/authAdmin.guard";
import { AuthProveedorGuard } from "./guards/authProveedor.guard";
import { IndexInventarioComponent } from "./components/inventario/index-inventario/index-inventario.component";
import { AuthAlmaceneroGuard } from "./guards/authAlmacenero.guard";
import { CreateInventarioTiendaComponent } from "./components/tiendas/create-inventario/create-inventario.component";
import { EditInventarioAlmacenComponent } from "./components/almacenes/edit-inventario/edit-inventario.component";
import { CreateInventarioComponent } from "./components/inventario/create-inventario/create-inventario.component";
import { EditInventarioComponent } from "./components/inventario/edit-inventario/edit-inventario.component";
import { IndexSolicitudComponent } from "./components/solicitudes/index-solicitud/index-solicitud.component";
import { EditSolicitudComponent } from "./components/solicitudes/edit-solicitud/edit-solicitud.component";

const appRoute : Routes = [
    {path: '', redirectTo: 'login', pathMatch : 'full'},
    {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
    {path: 'login', component: LoginComponent},


    {path: 'clientes', component: IndexClientesComponent, canActivate:[AuthGuard]},

    {path: 'ordenes', component: IndexOrdenComponent, canActivate:[AuthGuard,AuthAdminGuard]},
    {path: 'ordenes/create', component: CreateOrdenComponent, canActivate:[AuthGuard,AuthAdminGuard]},

    {path: 'proveedores', component: IndexProveedorComponent, canActivate:[AuthGuard,AuthAdminGuard]},
    {path: 'proveedores/create', component: CreateProveedorComponent, canActivate:[AuthGuard,AuthAdminGuard]},
    {path: 'proveedores/edit/:id', component: EditProveedorComponent, canActivate:[AuthGuard,AuthAdminGuard]},
    {path: 'proveedores/inventario/:idProveedor', component: InventarioProveedorComponent, canActivate:[AuthGuard,AuthAdminGuard]},

    {path: 'productos', component: IndexProductoComponent, canActivate:[AuthGuard,AuthAdminGuard]},
    {path: 'productos/create', component: CreateProductoComponent, canActivate:[AuthGuard,AuthAdminGuard]},
    {path: 'productos/edit/:id', component: EditProductoComponent, canActivate:[AuthGuard,AuthAdminGuard]},

    {path: 'solicitudes', component: IndexSolicitudComponent, canActivate:[AuthGuard,AuthProveedorGuard]},
    {path: 'solicitudes/edit/:id', component: EditSolicitudComponent, canActivate:[AuthGuard,AuthProveedorGuard]},

    {path: 'inventario', component: IndexInventarioComponent, canActivate:[AuthGuard,AuthProveedorGuard]},
    {path: 'inventario/create', component: CreateInventarioComponent, canActivate:[AuthGuard,AuthProveedorGuard]},
    {path: 'inventario/edit/:id', component: EditInventarioComponent, canActivate:[AuthGuard,AuthProveedorGuard]},

    {path: 'materiasprimas', component: IndexMateriaPrimaComponent, canActivate:[AuthGuard,AuthAdminGuard]},
    {path: 'materiasprimas/create', component: CreateMateriaPrimaComponent, canActivate:[AuthGuard,AuthAdminGuard]},
    {path: 'materiasprimas/edit/:id', component: EditMateriaPrimaComponent, canActivate:[AuthGuard,AuthAdminGuard]},

    {path: 'almacenes', component: InicioAlmacenComponent, canActivate:[AuthGuard,AuthAlmaceneroGuard]},
    {path: 'almacenes/producto', component: IndexAlmacenComponent, canActivate:[AuthGuard,AuthAlmaceneroGuard]},
    {path: 'almacenes/producto/inventario/:idAlmacen', component: InventarioAlmacenComponent, canActivate:[AuthGuard,AuthAlmaceneroGuard]},
    {path: 'almacenes/producto/inventario/:idAlmacen/editar/:id', component: EditInventarioAlmacenComponent, canActivate:[AuthGuard,AuthAlmaceneroGuard]},
    {path: 'almacenes/producto/inventario/:idAlmacen/movimientos/:id', component: MovimientoAlmacenComponent, canActivate:[AuthGuard,AuthAlmaceneroGuard]},

    {path: 'tiendas', component: IndexTiendaComponent, canActivate:[AuthGuard,AuthAdminGuard]},
    {path: 'tiendas/inventario/:idTienda', component: InventarioTiendaComponent, canActivate:[AuthGuard,AuthAdminGuard]},
    {path: 'tiendas/inventario/:idTienda/create', component: CreateInventarioTiendaComponent, canActivate:[AuthGuard,AuthAdminGuard]},

    {path: 'configuraciones', component: ConfigComponent, canActivate:[AuthGuard]},
    /* {path: '**', component: NotFoundComponent}, */
]

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> =  RouterModule.forRoot(appRoute);