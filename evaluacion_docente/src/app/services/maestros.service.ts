import { Injectable } from '@angular/core';
import { Maestro } from '../maestros/maestro.model';

@Injectable({ providedIn: 'root' })
export class MaestroService {
  maestrosKey = 'maestros'; // Clave para el almacenamiento local
  maestro: Maestro[] = [];

  constructor() {
    this.cargarMaestrosDelLocalStorage(); // Carga al iniciar el servicio
  }

  agregarMaestro(maestro: Maestro) {
    this.maestro.push(maestro);
    this.guardarMaestrosEnLocalStorage();
  }

  modificarMaestro(index: number, maestro: Maestro) {
    this.maestro[index] = maestro;
    this.guardarMaestrosEnLocalStorage();
  }

  eliminarMaestro(index: number) {
    this.maestro.splice(index, 1);
    this.guardarMaestrosEnLocalStorage();
  }

  getMaestroById(id: number): Maestro | undefined {
    return this.maestro.find(maestro => maestro.id === id);
  }

  getMaestros() {
    return this.maestro;
  }

  private cargarMaestrosDelLocalStorage(): void {
    const maestrosString = localStorage.getItem(this.maestrosKey);
    if (maestrosString) {
      this.maestro = JSON.parse(maestrosString);
    }
  }

  private guardarMaestrosEnLocalStorage(): void {
    localStorage.setItem(this.maestrosKey, JSON.stringify(this.maestro));
  }
}