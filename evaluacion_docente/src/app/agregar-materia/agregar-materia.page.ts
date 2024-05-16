import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Materia } from '../materias/materia.model';
import { MateriaService } from '../materias/materia.service';

@Component({
  selector: 'app-agregar-materia',
  templateUrl: './agregar-materia.page.html',
  styleUrls: ['./agregar-materia.page.scss'],
})
export class AgregarMateriaPage {
  nombre: string = '';
  horario: string = '';

  constructor(
    private modalCtrl: ModalController,
    private materiaService: MateriaService
  ) { }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  agregarMateria() {
    const nuevaMateria: Materia = {
      id: this.materiaService.getMaterias().length + 1, // Asegúrate de tener una lógica adecuada para asignar IDs
      nombre: this.nombre,
      horario: this.horario,
      maestros: [] // Inicializa el arreglo de maestros como vacío
    };

    this.materiaService.agregarMateria(nuevaMateria);
    this.cerrarModal();
  }
}