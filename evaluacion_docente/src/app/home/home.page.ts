import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importar NavController

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}  // Inyectar NavController

  goToMaterias() {
    this.navCtrl.navigateForward('/materias');
  }
}
