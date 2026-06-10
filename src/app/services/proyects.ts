import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class proyectService 
{

  private urlApi="http://localhost:3000/proyectos";

  constructor (private http:HttpClient)
  {

  }

  getproyects(): Observable<any>
  {
    return this.http.get(this.urlApi);
  }

}
