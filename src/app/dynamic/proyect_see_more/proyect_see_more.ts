import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Proyectos, Proyecto } from '../proyects/proyects';

@Component({
  selector: 'app-proyecto-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './proyecto_detalle.html',
  styleUrl: './proyecto_detalle.css'
})
export class ProyectoDetalle implements OnInit {
  proyecto: Proyecto | undefined;

  private listaProyectos: Proyecto[] = new Proyectos().proyectos;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.proyecto = this.listaProyectos.find(p => p.id === id);
  }
}