import { Maestro } from '../maestros/maestro.model';

export interface Materia {
  id: number;
  nombre: string;
  horario: string;
  maestros: (Maestro | undefined)[];
  profesorSeleccionado?: number; 
}