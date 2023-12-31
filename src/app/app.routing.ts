// Imporrtar modulos del router del sitio
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar componestes de los cuales quiero hacer una pagina exclusiva

import { HomeComponent } from './Components/home/home.component';
import { NosotrosComponent } from './Components/SubPaginas/nosotros/nosotros.component';
import { TiendaComponent } from './Components/SubPaginas/tienda/tienda.component';
import { BlogComponent } from './Components/SubPaginas/blog/blog.component';
import { GaleriaComponent } from './Components/SubPaginas/galeria/galeria.component';
import { ContactoComponent } from './Components/SubPaginas/contacto/contacto.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'contacto', component: ContactoComponent }
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
