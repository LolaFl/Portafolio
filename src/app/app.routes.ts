import { Routes } from '@angular/router';
import { SobreMi } from './dynamic/about_me/about_me';
import { Proyectos } from './dynamic/proyects/proyects';
import { ProyectoDetalle } from './dynamic/proyect_see_more/proyect_see_more';
import { RegisterUserComponent } from './dynamic/register-user/register-user'; // ← sin .component

export const routes: Routes = [
  { path: '', redirectTo: 'sobre-mi', pathMatch: 'full' },
  { path: 'proyectos', component: Proyectos },
  { path: 'proyectos/:id', component: ProyectoDetalle },
  { path: 'sobre-mi', component: SobreMi },
  { path: 'registro', component: RegisterUserComponent },
  { path: '**', redirectTo: 'sobre-mi' }
];