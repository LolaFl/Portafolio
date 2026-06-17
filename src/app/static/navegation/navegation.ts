import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component
(
  {
  selector: 'app-navegacion',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navegation.html',
  styleUrl: './navegation.css'
  }
)
export class Navegacion {}