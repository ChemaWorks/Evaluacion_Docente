import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MaestroService } from '../services/maestros.service';
import { Maestro } from '../maestros/maestro.model';
import { MateriaService } from '../materias/materia.service';

@Component({
  selector: 'app-agregar-maestro',
  templateUrl: './agregar-maestro.page.html',
  styleUrls: ['./agregar-maestro.page.scss'],
})
export class AgregarMaestroPage {
  nombre: string;
  materia: string;
  horario: string;
  materiaId: number; // Recibe el ID de la materia

  constructor(
    private modalCtrl: ModalController,
    private maestroService: MaestroService,
    private materiaService: MateriaService // Inyecta MateriaService
  ) {
    this.nombre = '';
    this.materia = '';
    this.horario = '';
    this.materiaId = 0; // Inicializa materiaId con null
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  agregarMaestro() {
    const nuevoMaestro: Maestro = {
      id: this.maestroService.getMaestros().length + 1, // Ajusta la lógica de asignación de ID si es necesario
      nombre: this.nombre,
      materia: this.materia, // Puedes eliminar esta línea si no la necesitas
      horario: this.horario,
      preguntas: []
    };

    this.maestroService.agregarMaestro(nuevoMaestro); // Agrega el maestro al servicio

    // Encuentra la materia por ID
    if (this.materiaId !== null && this.materiaId !== undefined) {
      const materia = this.materiaService.getMateriaById(this.materiaId);
      if (materia) {
        // Agrega el maestro a la materia
        materia.maestros.push(nuevoMaestro);
        this.materiaService.modificarMateria(materia.id - 1, materia); // Actualiza la materia en el servicio
        this.cerrarModal();
      }
    }
    console.log(nuevoMaestro)
  }
}