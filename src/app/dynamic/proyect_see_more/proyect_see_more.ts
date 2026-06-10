import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Proyectos, Proyecto } from '../proyects/proyects';

@Component({
  selector: 'app-proyecto-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './proyect_see_more.html',
  styleUrl: './proyect_see_more.css'
})
export class ProyectoDetalle implements OnInit {
  proyecto: Proyecto | undefined;

  private listaProyectos: any

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.proyecto = this.listaProyectos.find((p: { id: number; }) => p.id === id);
  }
}