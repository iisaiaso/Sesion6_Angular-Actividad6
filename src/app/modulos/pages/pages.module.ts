import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    HomeComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactenosComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    NosotrosComponent,
    ServiciosComponent,
    ContactenosComponent,
    PageNotFoundComponent
  ]
})
export class PagesModule { }
