import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Navegacion } from './navegacion/navegacion';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Footer,Navegacion],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portafolio-proyect');
}
