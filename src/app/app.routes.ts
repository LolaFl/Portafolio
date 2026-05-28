import { Routes } from '@angular/router';
import { SobreMi } from './sobre-mi/sobre-mi';
import { Proyectos } from './proyectos/proyectos';
import { ProyectoDetalle } from './proyecto_detalle/proyecto_detalle';

export const routes: Routes = [
  { path: '', redirectTo: 'sobre-mi', pathMatch: 'full' },
  { path: 'proyectos', component: Proyectos },
  { path: 'proyectos/:id', component: ProyectoDetalle },
  { path: 'sobre-mi', component: SobreMi },
  { path: '**', redirectTo: 'sobre-mi' }
];