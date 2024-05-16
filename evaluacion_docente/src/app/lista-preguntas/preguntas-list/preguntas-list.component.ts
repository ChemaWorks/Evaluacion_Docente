import { Component, OnInit } from '@angular/core';
import { PreguntaService } from '../../services/preguntas.service';
import { ModalController, NavController } from '@ionic/angular';
import { AgregarPreguntaPage } from '../../agregar-pregunta/agregar-pregunta.page';
import { ModificarPreguntaPage } from '../../modificar-pregunta/modificar-pregunta.page';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-preguntas',
  templateUrl: './preguntas-list.component.html',
  styleUrls: ['./preguntas-list.component.scss']
})
export class ListaPreguntasComponent implements OnInit {
  preguntas: { texto: string, calificacion: number }[] = [];
  esAdmin: boolean = false; // Valor por defecto
  maestro: string = "";

  constructor(
    private preguntaService: PreguntaService,
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.maestro = params['maestro'];
    });
    this.preguntas = this.preguntaService.preguntas;
    this.esAdmin = this.obtenerEstadoAdmin();
  }

  obtenerEstadoAdmin(): boolean {
    return localStorage.getItem('isAdmin') === 'true'; // Leer el estado de admin desde el almacenamiento local
  }

  goToListaProfesores() {
    this.navCtrl.navigateForward('/materias');
  }

  async abrirModalAgregarPregunta() {
    if (this.esAdmin) {
      const modal = await this.modalCtrl.create({
        component: AgregarPreguntaPage,
      });
      await modal.present();
    }
  }

  async abrirModalModificarPregunta(pregunta: string, index: number) {
    if (this.esAdmin) {
      const modal = await this.modalCtrl.create({
        component: ModificarPreguntaPage,
        componentProps: {
          pregunta,
          index
        }
      });
      await modal.present();
    }
  }

  eliminarPregunta(index: number) {
    if (this.esAdmin) {
      this.preguntaService.eliminarPregunta(index);
    }
  }

  actualizarCalificacion(index: number, event: any) {
    const calificacion = event.target.value;
    this.preguntaService.modificarCalificacion(index, calificacion);
  }
}
