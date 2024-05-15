import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MaestroService } from '../services/maestros.service';
import { Maestro } from '../maestros/maestro.model';

@Component({
  selector: 'app-agregar-maestro',
  templateUrl: './agregar-maestro.page.html',
  styleUrls: ['./agregar-maestro.page.scss'],
})
export class AgregarMaestroPage {
  nombre: string;
  materia: string;
  horario: string;

  constructor(private modalCtrl: ModalController, private maestroService: MaestroService) {
    this.nombre = '';
    this.materia = '';
    this.horario = '';
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  agregarMaestro() {
    const nuevoMaestro: Maestro = {
      id: this.maestroService.maestro.length + 1, // Ajusta la lógica de asignación de ID si es necesario
      nombre: this.nombre,
      materia: this.materia,
      horario: this.horario,
      preguntas: []
    };
    this.maestroService.agregarMaestro(nuevoMaestro);
    this.cerrarModal();
  }
}