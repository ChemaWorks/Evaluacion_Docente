import { Injectable } from '@angular/core';
import { Materia } from './materia.model';
import { MaestroService } from '../services/maestros.service';
import { Maestro } from '../maestros/maestro.model';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  private materias: Materia[] = [
    { id: 1, nombre: 'Matemáticas', horario: '08:00 - 10:00', maestros: this.assignMaestros([1, 2]) }, // Asumiendo IDs de maestros
    { id: 2, nombre: 'Literatura', horario: '10:00 - 12:00', maestros: this.assignMaestros([3]) },
    { id: 3, nombre: 'Ciencias', horario: '12:00 - 14:00', maestros: this.assignMaestros([4]) }
  ];

  constructor(private maestroService: MaestroService) {}

  private assignMaestros(maestroIds: number[]): Maestro[] {
    return maestroIds
      .map((id) => this.maestroService.getMaestroById(id))
      .filter((maestro) => maestro !== undefined) as Maestro[];
  }

  getMaterias(): Materia[] {
    return this.materias;
  }
}

