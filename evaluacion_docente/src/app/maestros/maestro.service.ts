import { Injectable } from '@angular/core';
import { Maestro } from '../maestros/maestro.model';

@Injectable({
  providedIn: 'root'
})
export class MaestroService {
  private maestros: Maestro[] = [
    { matricula: 1, nombre: 'Juan Pérez' },
    { matricula: 2, nombre: 'Ana Gómez' },
    { matricula: 3, nombre: 'Luis Ramos' },
    { matricula: 4, nombre: 'Sofía Castillo' }
  ];

  constructor() { }

  getMaestros(): Maestro[] {
    return this.maestros;
  }

  addMaestro(maestro: Maestro): void {
    this.maestros.push(maestro);
  }

  getMaestroById(id: number): Maestro | undefined {
    return this.maestros.find(maestro => maestro.matricula === id);
  }

}
