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
import { EditInventarioComponent } from './components/almacenes/edit-inventario/edit-inventario.component';
import { CreateInventarioComponent } from "./components/tiendas/create-inventario/create-inventario.component";
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

const appRoute : Routes = [
    {path: '', redirectTo: 'login', pathMatch : 'full'},
    {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
    {path: 'login', component: LoginComponent},


    {path: 'clientes', component: IndexClientesComponent, canActivate:[AuthGuard]},

    {path: 'ordenes', component: IndexOrdenComponent, canActivate:[AuthGuard]},
    {path: 'ordenes/create', component: CreateOrdenComponent, canActivate:[AuthGuard]},

    {path: 'proveedores', component: IndexProveedorComponent, canActivate:[AuthGuard]},
    {path: 'proveedores/create', component: CreateProveedorComponent, canActivate:[AuthGuard]},
    {path: 'proveedores/edit/:id', component: EditProveedorComponent, canActivate:[AuthGuard]},
    {path: 'proveedores/inventario/:idProveedor', component: InventarioProveedorComponent, canActivate:[AuthGuard]},

    {path: 'productos', component: IndexProductoComponent, canActivate:[AuthGuard,AuthAdminGuard]},
    {path: 'productos/create', component: CreateProductoComponent, canActivate:[AuthGuard]},
    {path: 'productos/edit/:id', component: EditProductoComponent, canActivate:[AuthGuard]},

    {path: 'materiasprimas', component: IndexMateriaPrimaComponent, canActivate:[AuthGuard]},
    {path: 'materiasprimas/create', component: CreateMateriaPrimaComponent, canActivate:[AuthGuard]},
    {path: 'materiasprimas/edit/:id', component: EditMateriaPrimaComponent, canActivate:[AuthGuard]},

    {path: 'almacenes', component: InicioAlmacenComponent, canActivate:[AuthGuard]},
    {path: 'almacenes/producto', component: IndexAlmacenComponent, canActivate:[AuthGuard]},
    {path: 'almacenes/producto/inventario/:idAlmacen', component: InventarioAlmacenComponent, canActivate:[AuthGuard]},
    {path: 'almacenes/producto/inventario/:idAlmacen/editar/:id', component: EditInventarioComponent, canActivate:[AuthGuard]},
    {path: 'almacenes/producto/inventario/:idAlmacen/movimientos/:id', component: MovimientoAlmacenComponent, canActivate:[AuthGuard]},

    {path: 'tiendas', component: IndexTiendaComponent, canActivate:[AuthGuard]},
    {path: 'tiendas/inventario/:idTienda', component: InventarioTiendaComponent, canActivate:[AuthGuard]},
    {path: 'tiendas/inventario/:idTienda/create', component: CreateInventarioComponent, canActivate:[AuthGuard]},

    {path: 'configuraciones', component: ConfigComponent, canActivate:[AuthGuard]},
    /* {path: '**', component: NotFoundComponent}, */
]

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> =  RouterModule.forRoot(appRoute);