import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './static/header/header';
import { Footer } from './static/footer/footer';
import { Navegacion } from './static/navegation/navegation';

@Component
(
  {
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,Navegacion],
  templateUrl: './app.html',
  styleUrl: './app.css'
  }
)
export class App 
{
  protected readonly title = signal('portafolio-proyect');
}
