import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../services/preguntas.service';
import { ModalController } from '@ionic/angular';
import { AgregarPreguntaPage } from '../../agregar-pregunta/agregar-pregunta.page';
import { ModificarPreguntaPage } from '../../modificar-pregunta/modificar-pregunta.page';

@Component({
  selector: 'app-lista-preguntas',
  templateUrl: './preguntas-list.component.html',
  styleUrls: ['./preguntas-list.component.scss']
})
export class ListaPreguntasComponent implements OnInit {
  preguntas: string[] = [];
  esAdmin: boolean = false; // Valor por defecto

  constructor(
    private preguntaService: PreguntaService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.preguntas = this.preguntaService.preguntas;
    // Obtener el estado de administrador desde algún servicio o lógica de autenticación
    this.esAdmin = this.obtenerEstadoAdmin();
  }

  obtenerEstadoAdmin(): boolean {
    // Lógica para determinar si el usuario es administrador
    // Ejemplo: leer de localStorage o un servicio de autenticación
    return true; // Cambiar a la lógica real
  }

  async abrirModalAgregarPregunta() {
    const modal = await this.modalCtrl.create({
      component: AgregarPreguntaPage,
    });
    await modal.present();
  }

  async abrirModalModificarPregunta(pregunta: string, index: number) {
    const modal = await this.modalCtrl.create({
      component: ModificarPreguntaPage,
      componentProps: {
        pregunta,
        index
      }
    });
    await modal.present();
  }

  eliminarPregunta(index: number) {
    this.preguntaService.eliminarPregunta(index);
  }
}