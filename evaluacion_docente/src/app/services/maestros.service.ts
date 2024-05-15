import { Injectable } from '@angular/core';
import { Maestro } from '../maestros/maestro.model';

@Injectable({ providedIn: 'root' })
export class MaestroService {
  maestro: Maestro[] = [
    { id: 1, nombre: 'Juan Perez', materia: 'Matematicas', horario: '8:00 - 10:00', preguntas: [] },
    { id: 2, nombre: 'Maria Rodriguez', materia: 'Español', horario: '10:00 - 12:00', preguntas: [] },
    // ... más maestros
  ];

  agregarMaestro(maestro: Maestro) {
    this.maestro.push(maestro);
  }

  modificarMaestro(index: number, maestro: Maestro) {
    this.maestro[index] = maestro;
  }

  eliminarMaestro(index: number) {
    this.maestro.splice(index, 1);
  }

  getMaestroById(id: number): Maestro | undefined {
    return this.maestro.find(maestro => maestro.id === id);
  }
}