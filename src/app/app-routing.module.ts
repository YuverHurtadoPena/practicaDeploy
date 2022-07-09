import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasificacionesComponent } from './componentes/clasificaciones/clasificaciones.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "clasificaciones",
  },
  {
    path: "clasificaciones",
    component: ClasificacionesComponent,
  },
  {
    path: "**",
    redirectTo: "clasificaciones",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true, relativeLinkResolution:'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
