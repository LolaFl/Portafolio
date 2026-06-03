import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class Proyectos {
  proyectos: Proyecto[] = [
    {
      id: 1,
      nombre: 'Portafolio',
      descripcion: 'Este proyecto se trata sobre la organización de todos mis proyectos.',
      descripcion_larga: 'Descripción detallada del proyecto 1',
      estado_del_proyecto: 'Terminado',
      icono: '❤️',
      tecnologias: ['Angular', 'TypeScript', 'CSS'],
      repo: '',
      demo: ''
    },
    {
      id: 2,
      nombre: 'Proyecto 2',
      descripcion: 'Descripción del proyecto.',
      descripcion_larga: 'Descripción detallada del proyecto 2.',
      estado_del_proyecto: 'En proceso',
      icono: '❤️',
      tecnologias: ['Angular', 'Javascript'],
      repo: ''
    }
  ];
}