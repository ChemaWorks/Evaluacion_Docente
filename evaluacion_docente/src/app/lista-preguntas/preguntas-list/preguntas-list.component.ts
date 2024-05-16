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
  promedio: number = 0; // Valor por defecto

  constructor(
    private preguntaService: PreguntaService,
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    private router: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.maestro = params['maestro'];
      this.cargarCalificaciones();
      this.calcularPromedio();
    });
    this.preguntas = [
      { texto: '¿El maestro se comunica claramente?', calificacion: 3 },
      { texto: '¿El maestro es puntual?', calificacion: 3 },
      { texto: '¿El maestro es accesible fuera del aula?', calificacion: 3 },
      { texto: '¿El maestro utiliza ejemplos relevantes?', calificacion: 3 },
      { texto: '¿El maestro es justo en la evaluación?', calificacion: 3 },
      { texto: '¿El maestro fomenta la participación?', calificacion: 3 },
      { texto: '¿El maestro es respetuoso?', calificacion: 3 },
      { texto: '¿El maestro proporciona retroalimentación útil?', calificacion: 3 },
      { texto: '¿El maestro está bien preparado?', calificacion: 3 },
      { texto: '¿El maestro es entusiasta?', calificacion: 3 },
      { texto: '¿El maestro maneja bien el tiempo de clase?', calificacion: 3 },
      { texto: '¿El maestro fomenta el pensamiento crítico?', calificacion: 3 },
      { texto: '¿El maestro usa tecnología de manera efectiva?', calificacion: 3 },
      { texto: '¿El maestro se adapta a diferentes estilos de aprendizaje?', calificacion: 3 },
      { texto: '¿El maestro muestra interés por el éxito de los estudiantes?', calificacion: 3 }
    ];
    this.esAdmin = this.obtenerEstadoAdmin();
  }

  obtenerEstadoAdmin(): boolean {
    return localStorage.getItem('isAdmin') === 'true'; // Leer el estado de admin desde el almacenamiento local
  }

  cargarCalificaciones() {
    const storedCalificaciones = localStorage.getItem(`calificaciones_${this.maestro}`);
    if (storedCalificaciones) {
      this.preguntas = JSON.parse(storedCalificaciones);
    }
  }

  guardarCalificaciones() {
    localStorage.setItem(`calificaciones_${this.maestro}`, JSON.stringify(this.preguntas));
  }

  calcularPromedio() {
    const totalCalificaciones = this.preguntas.reduce((sum, pregunta) => sum + pregunta.calificacion, 0);
    this.promedio = this.preguntas.length ? ((totalCalificaciones / this.preguntas.length) * (100)) / 5 : 0;
    console.log(`Promedio de ${this.maestro}: ${this.promedio}`);
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
      this.preguntas.splice(index, 1);
      this.guardarCalificaciones();
      this.calcularPromedio();
    }
  }

  actualizarCalificacion(index: number, event: any) {
    const calificacion = event.target.value;
    this.preguntas[index].calificacion = calificacion;
    this.guardarCalificaciones();
    this.calcularPromedio();
  }
}
