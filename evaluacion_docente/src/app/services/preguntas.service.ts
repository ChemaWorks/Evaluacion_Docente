import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PreguntaService {
  preguntas: { texto: string, calificacion: number }[] = [];

  agregarPregunta(pregunta: string) {
    this.preguntas.push({ texto: pregunta, calificacion: 1 }); // Calificación inicial de 1
  }

  modificarPregunta(index: number, pregunta: string) {
    this.preguntas[index].texto = pregunta;
  }

  modificarCalificacion(index: number, calificacion: number) {
    this.preguntas[index].calificacion = calificacion;
  }

  eliminarPregunta(index: number) {
    this.preguntas.splice(index, 1);
  }
}
