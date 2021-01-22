import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'lista-productos',
    loadChildren: () => import('./lista-productos/lista-productos.module').then( m => m.ListaProductosPageModule)
  },
  {
    path: 'detalles/:id',
    loadChildren: () => import('./detalles/detalles.module').then( m => m.DetallesPageModule)
  },
  {
    path: 'insertar-producto',
    loadChildren: () => import('./insertar-producto/insertar-producto.module').then( m => m.InsertarProductoPageModule)
  },
  {
    path: 'mis-ventas',
    loadChildren: () => import('./mis-ventas/mis-ventas.module').then( m => m.MisVentasPageModule)
  },
  {
    path: 'puntuacion/:nombre',
    loadChildren: () => import('./puntuacion/puntuacion.module').then( m => m.PuntuacionPageModule)
  },  {
    path: 'mis-envios',
    loadChildren: () => import('./mis-envios/mis-envios.module').then( m => m.MisEnviosPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
