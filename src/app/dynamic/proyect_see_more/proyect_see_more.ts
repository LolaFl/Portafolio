import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { proyectService } from '../../services/proyects';
import { Proyecto } from '../proyects/proyects';

@Component
(
  {
  selector: 'app-proyecto-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './proyect_see_more.html',
  styleUrl: './proyect_see_more.css'
  }
)
export class ProyectoDetalle implements OnInit 
{
  proyecto: Proyecto | undefined;

  constructor
  (
    private route: ActivatedRoute,
    private proyectsService: proyectService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() 
  {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID desde la URL:', id); 

    this.proyectsService.getproyects().subscribe
    (
      {
        next: (data: Proyecto[]) => 
        {
          this.proyecto = data.find(p => String(p.id) === id);
          this.cdr.detectChanges(); 
          if (!this.proyecto) 
          {
            console.warn('Proyecto no encontrado con ID:', id);
          }
        },
        error: (error) => console.error('Error al cargar proyecto:', error)
      }
    );
  }
}