import { Injectable } from '@angular/core';
import { Materia } from './materia.model';
import { MaestroService } from '../services/maestros.service';
import { Maestro } from '../maestros/maestro.model';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  private materiasKey = 'materias'; // Clave para el almacenamiento local
  private materias: Materia[] = [];

  constructor(private maestroService: MaestroService) {
    this.cargarMateriasDelLocalStorage(); // Carga al iniciar el servicio
  }

  private assignMaestros(maestroIds: number[]): Maestro[] {
    return maestroIds
      .map((id) => this.maestroService.getMaestroById(id))
      .filter((maestro) => maestro !== undefined) as Maestro[];
  }

  getMaterias(): Materia[] {
    return this.materias;
  }

  getMateriaById(id: number): Materia | undefined {
    return this.materias.find(materia => materia.id === id);
  }

  agregarMateria(materia: Materia) {
    this.materias.push(materia);
    this.guardarMateriasEnLocalStorage();
  }

  modificarMateria(index: number, materia: Materia) {
    this.materias[index] = materia;
    this.guardarMateriasEnLocalStorage();
  }

  eliminarMateria(index: number) {
    this.materias.splice(index, 1);
    this.guardarMateriasEnLocalStorage();
  }

  private cargarMateriasDelLocalStorage(): void {
    const materiasString = localStorage.getItem(this.materiasKey);
    if (materiasString) {
      this.materias = JSON.parse(materiasString);
    }
  }

  private guardarMateriasEnLocalStorage(): void {
    localStorage.setItem(this.materiasKey, JSON.stringify(this.materias));
  }
}