import { Routes } from '@angular/router';
import { SobreMi } from './dynamic/about_me/about_me';
import { Proyectos } from './dynamic/proyects/proyects';
import { ProyectoDetalle } from './dynamic/proyect_see_more/proyect_see_more';

export const routes: Routes = [
  { path: '', redirectTo: 'sobre-mi', pathMatch: 'full' },
  { path: 'proyectos', component: Proyectos },
  { path: 'proyectos/:id', component: ProyectoDetalle },
  { path: 'sobre-mi', component: SobreMi },
  { path: '**', redirectTo: 'sobre-mi' }
];