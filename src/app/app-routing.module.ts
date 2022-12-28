import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactenosComponent } from './modulos/pages/contactenos/contactenos.component';
import { HomeComponent } from './modulos/pages/home/home.component';
import { NosotrosComponent } from './modulos/pages/nosotros/nosotros.component';
import { PageNotFoundComponent } from './modulos/pages/page-not-found/page-not-found.component';
import { ServiciosComponent } from './modulos/pages/servicios/servicios.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'inicio',component:HomeComponent},
  {path:'nosotros', component:NosotrosComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'contactenos', component:ContactenosComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
