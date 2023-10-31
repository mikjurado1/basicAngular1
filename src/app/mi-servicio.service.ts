import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MiServicioService {
  nombre = 'Mundo';

  cambiarNombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }
}
