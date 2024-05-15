import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MaestroService } from '../services/maestros.service';
import { Maestro } from '../maestros/maestro.model';

@Component({
  selector: 'app-modificar-maestro',
  templateUrl: './modificar-maestro.page.html',
  styleUrls: ['./modificar-maestro.page.scss'],
})
export class ModificarMaestroPage {
  @Input() maestro!: Maestro;
  @Input() index: number;

  constructor(private modalCtrl: ModalController, private maestroService: MaestroService) {
    
    this.index = 0;

  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }
  async abrirModalModificarMaestro(maestro: Maestro | undefined, index: number) {
    if (!maestro) {
      return; // No abrir el modal si maestro es undefined
    }
    const modal = await this.modalCtrl.create({
      component: ModificarMaestroPage,
      componentProps: { maestro, index },
    });
    await modal.present();
  }

  modificarMaestro() {
    this.maestroService.modificarMaestro(this.index, this.maestro!);
    this.cerrarModal();
  }
}