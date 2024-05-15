import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PreguntaService } from '../services/preguntas.service';

@Component({
  selector: 'app-modificar-pregunta',
  templateUrl: './modificar-pregunta.page.html',
  styleUrls: ['./modificar-pregunta.page.scss'],
})
export class ModificarPreguntaPage {
  @Input() pregunta: string;
  @Input() index: number;

  constructor(private modalCtrl: ModalController, private preguntaService: PreguntaService) {
    this.pregunta = '';
    this.index = 0;
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  modificarPregunta() {
    this.preguntaService.modificarPregunta(this.index, this.pregunta);
    this.cerrarModal();
  }
}