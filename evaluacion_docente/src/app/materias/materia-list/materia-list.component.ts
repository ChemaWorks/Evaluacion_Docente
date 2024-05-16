import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../../materias/materia.service';
import { Materia } from '../../materias/materia.model';
import { Maestro } from '../../maestros/maestro.model';
import { NavController, ModalController } from '@ionic/angular'; 
import { AgregarMaestroPage } from '../../agregar-maestro/agregar-maestro.page';
import { ModificarMaestroPage } from '../../modificar-maestro/modificar-maestro.page';
import { AgregarPreguntaPage } from '../../agregar-pregunta/agregar-pregunta.page';
import { AgregarMateriaPage } from '../../agregar-materia/agregar-materia.page';
import { MaestroService } from '../../services/maestros.service';

@Component({
  selector: 'app-materia-list',
  templateUrl: './materia-list.component.html',
  styleUrls: ['./materia-list.component.scss']
})
export class MateriaListComponent implements OnInit {
  materias: Materia[] = [];
  esAdmin: boolean = false; // Valor por defecto

  constructor(
    private materiaService: MateriaService,
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private maestroService: MaestroService // Inyecta el servicio MaestroService
  ) { }

  ngOnInit() {
    this.materias = this.materiaService.getMaterias();
    // Obtener el estado de administrador desde algún servicio o lógica de autenticación
    this.esAdmin = this.obtenerEstadoAdmin();
  }

  obtenerEstadoAdmin(): boolean {
    const adminStatus = localStorage.getItem('isAdmin');
    return adminStatus === 'true';
  }

  goToPreguntas() {
    this.navCtrl.navigateForward('/preguntas');
  }

  goToListaPreguntas(maestro:string) {
    this.navCtrl.navigateForward(['/lista-preguntas', maestro]);
  }

  async abrirModalAgregarMaestro(materiaId: number) {
    const modal = await this.modalCtrl.create({
      component: AgregarMaestroPage,
      componentProps: { materiaId: materiaId } // Pasa el ID de la materia al modal
    });
    await modal.present();
  }

  async abrirModalAgregarMateria() {
    const modal = await this.modalCtrl.create({
      component: AgregarMateriaPage, // Cambia a AgregarMateriaPage
    });
    await modal.present();
  }

  async abrirModalModificarMaestro(maestro: Maestro, index: number) {
    const modal = await this.modalCtrl.create({
      component: ModificarMaestroPage,
      componentProps: {
        maestro,
        index
      }
    });
    await modal.present();
  }

  eliminarMaestro(index: number, materiaId: number) { 
    const materiaIndex = this.materias.findIndex(m => m.id === materiaId);
    if (materiaIndex !== -1) {
      this.materias[materiaIndex].maestros.splice(index, 1);
      this.materiaService.modificarMateria(materiaIndex, this.materias[materiaIndex]); 
    }
  }

  async abrirModalAgregarPregunta(maestroId: number) {
    const modal = await this.modalCtrl.create({
      component: AgregarPreguntaPage,
      componentProps: {
        maestroId
      }
    });
    await modal.present();
  }

  cambiarProfesor(materia: Materia, profesorId: number) {
    materia.profesorSeleccionado = profesorId;
    this.materiaService.modificarMateria(materia.id - 1, materia);
  }

  goToDashboard() {
    this.navCtrl.navigateForward('/dashboard');
  }

  
}