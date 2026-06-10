import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { proyectService } from '../../services/proyects'

export interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  descripcion_larga: string;
  estado_del_proyecto: string;
  icono: string;
  tecnologias: string[];
  repo: string;
  demo?: string;
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './proyects.html',
  styleUrl: './proyects.css'
})
export class Proyectos 
{
  proyectos:any
  constructor (private proyectsService: proyectService)
  {
    this.proyectsService.getproyects().subscribe
    (
      {
        next: (data) => console.log(data),
        error: (error) => console.error(error),
        complete: () => console.info('complete')
      }
    )
  }
}

