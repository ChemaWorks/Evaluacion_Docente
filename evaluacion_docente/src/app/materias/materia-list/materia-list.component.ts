import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../../materias/materia.service';
import { Materia } from '../../materias/materia.model';
import { Maestro } from '../../maestros/maestro.model';  // Asegúrate de que la ruta es correcta

@Component({
  selector: 'app-materia-list',
  templateUrl: './materia-list.component.html',
  styleUrls: ['./materia-list.component.scss']
})
export class MateriaListComponent implements OnInit {
  materias: Materia[] = [];

  constructor(private materiaService: MateriaService) { }

  ngOnInit() {
    this.materias = this.materiaService.getMaterias();
  }

  evaluar(maestro: Maestro | undefined) {
    if (!maestro) {
      console.log('No hay maestro para evaluar');
      return; // Salir si maestro es undefined
    }
    console.log('Evaluando a:', maestro.nombre);
    // Implementa la lógica para evaluar al maestro aquí
  }
}
