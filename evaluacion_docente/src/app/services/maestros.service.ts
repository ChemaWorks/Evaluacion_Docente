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



  obtenerProfesoresConPromedios(): { maestro: string, promedio: number }[] {
    return this.maestro.map(profesor => {
      let calificacionesString = localStorage.getItem('calificaciones_' + profesor.nombre);
      let calificaciones: { calificacion: number }[] = []; // Define calificaciones como un array
      if (calificacionesString) {
        try {
          calificaciones = JSON.parse(calificacionesString); // Intenta convertir el string a un array
        } catch (error) {
          // Manejar el error si el valor no es un JSON válido
          return { maestro: profesor.nombre, promedio: 0 };
        }
      }

      let promedio = 0;
      if (calificaciones.length > 0) { // Verifica si hay calificaciones
        promedio = calificaciones.reduce((sum: number, pregunta) => sum + pregunta.calificacion, 0) / calificaciones.length;
      }
      return { maestro: profesor.nombre, promedio: promedio };
    });
  }
}