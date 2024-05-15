import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PreguntaService } from '../services/preguntas.service';
import { MaestroService } from '../services/maestros.service';

@Component({
  selector: 'app-agregar-pregunta',
  templateUrl: './agregar-pregunta.page.html',
  styleUrls: ['./agregar-pregunta.page.scss'],
})
export class AgregarPreguntaPage {
  @Input() maestroId: number;
  pregunta: string;

  constructor(
    private modalCtrl: ModalController, 
    private preguntaService: PreguntaService,
    private maestroService: MaestroService
  ) {
    this.pregunta = '';
    this.maestroId = 0;
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  agregarPregunta() {
    this.preguntaService.agregarPregunta(this.pregunta);
    const maestro = this.maestroService.getMaestroById(this.maestroId);
    if (maestro) {
      maestro.preguntas.push(this.pregunta);
    }
    this.cerrarModal();
  }
}