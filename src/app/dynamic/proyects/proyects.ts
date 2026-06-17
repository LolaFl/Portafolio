import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { proyectService } from '../../services/proyects';

export interface Proyecto 
{
  id: number;
  nombre: string;
  descripcion: string;
  descripcion_larga: string;
  estado_del_proyecto: string;
  icono: string;
  tecnologias: string[];
  rol_del_equipo: string; 
  repo: string;
  demo?: string;
}

@Component
(
  {
  selector: 'app-proyectos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './proyects.html',
  styleUrl: './proyects.css'
  }
)
export class Proyectos implements OnInit 
{
  proyectos: Proyecto[] = [];

  constructor
  (
    private proyectsService: proyectService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit() 
  {
    this.proyectsService.getproyects().subscribe
    (
      {
      next: (data) => 
      {
        this.proyectos = data;
        this.cdr.detectChanges();  
        console.log('Proyectos cargados:', data);
      },
      error: (error) => console.error('Error al cargar proyectos:', error),
      complete: () => console.info('Carga de proyectos completada')
      }
    );
  }
}