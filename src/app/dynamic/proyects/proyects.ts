import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { proyectService } from '../../services/proyects';
import { CreateProyectComponent } from '../create-proyect/create-proyect';

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
  imports: [RouterLink, CommonModule, CreateProyectComponent],
  templateUrl: './proyects.html',
  styleUrl: './proyects.css'
  }
)

export class Proyectos implements OnInit 
{
  proyectos: Proyecto[] = [];
  showModal = false; 

  constructor
  (
    private proyectsService: proyectService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() 
  {
    this.loadProyects();
  }

  loadProyects() 
  {
    this.proyectsService.getproyects().subscribe({
      next: (data) => {
        this.proyectos = data;
        this.cdr.detectChanges();
        console.log('Proyectos cargados:', data);
      },
      error: (error) => console.error('Error al cargar proyectos:', error),
      complete: () => console.info('Carga de proyectos completada')
    });
  }

  openModal() 
  {
    this.showModal = true;
  }

  closeModal() 
  {
    this.showModal = false;
  }

  createProyect(proyectData: any) 
  {
    this.proyectsService.createProyect(proyectData).subscribe
    ({
      next: (newProyect) => 
      {
        this.proyectos = [...this.proyectos, newProyect];
        this.cdr.detectChanges();
        this.closeModal();
        console.log('Proyecto creado:', newProyect);
      },
      error: (error) => console.error('Error al crear proyecto:', error)
    });
  }
}