import { Component } from '@angular/core';
import { MiServicioService } from '../mi-servicio.service';

@Component({
  selector: 'app-mi-componente',
  template: `
    <h1>Hola, {{miServicio.nombre}}!</h1>
    <button (click)="cambiarNombre()">Cambiar Nombre</button>
  `,
})
export class MiComponenteComponent {
  constructor(public miServicio: MiServicioService) {}

  cambiarNombre() {
    const nuevoNombre = prompt('Introduce un nuevo nombre:');
    if (nuevoNombre) {
      this.miServicio.cambiarNombre(nuevoNombre);
    }
  }
}
