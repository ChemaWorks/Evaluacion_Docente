import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PreguntaService {
  preguntas: string[] = [];

  agregarPregunta(pregunta: string) {
    this.preguntas.push(pregunta);
  }

  modificarPregunta(index: number, pregunta: string) {
    this.preguntas[index] = pregunta;
  }

  eliminarPregunta(index: number) {
    this.preguntas.splice(index, 1);
  }
}