import { Component } from '@angular/core';

interface Habilidad 
{
  nombre: string;
  icono: string;
  nivel: number;
}

@Component
(
  {
  selector: 'app-sobre-mi',
  standalone: true,
  templateUrl: './about_me.html',
  styleUrl: './about_me.css'
  }
)
export class SobreMi 
{
  habilidades: Habilidad[] = 
  [
    { nombre: 'Phyton', icono: '❤️', nivel: 30 },
    { nombre: 'JavaScript', icono: '❤️', nivel: 20 },
    { nombre: 'Angular', icono: '❤️', nivel: 35 },
    { nombre: 'CSS', icono: '❤️', nivel: 10 },
    { nombre: 'Git', icono: '❤️', nivel: 10 },
  ];
}