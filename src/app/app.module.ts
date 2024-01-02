import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/**  Routing**/
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NuestrosProductosComponent } from './Components/home/nuestros-productos/nuestros-productos.component';
import { CategoriasComponent } from './Components/home/categorias/categorias.component';
import { HomeComponent } from './Components/home/home.component';
import { NosotrosComponent } from './Components/SubPaginas/nosotros/nosotros.component';
import { TiendaComponent } from './Components/SubPaginas/tienda/tienda.component';
import { BlogComponent } from './Components/SubPaginas/blog/blog.component';
import { GaleriaComponent } from './Components/SubPaginas/galeria/galeria.component';
import { ContactoComponent } from './Components/SubPaginas/contacto/contacto.component';
import { EntradasComponent } from './Components/SubPaginas/blog/entradas/entradas.component';
import { EntradaComponent } from './Components/SubPaginas/blog/entradas/entrada/entrada.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NuestrosProductosComponent,
    CategoriasComponent,
    HomeComponent,
    NosotrosComponent,
    TiendaComponent,
    BlogComponent,
    GaleriaComponent,
    ContactoComponent,
    EntradasComponent,
    EntradaComponent,
  ],
  imports: [BrowserModule, routing],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
