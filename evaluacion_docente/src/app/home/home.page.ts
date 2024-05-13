import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'; // Importar NavController

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController, private alertController: AlertController) {}  // Inyectar NavController

  goToMaterias() {
    this.navCtrl.navigateForward('/materias');
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  public alertButtons = [
    {
      text: 'Ver Materias',
      handler: () => {
        this.goToMaterias(); 
      }
    }
  ]
  public alertInputs = [
    {
      placeholder: 'Matricula (max 5 caracteres)',
      attributes: {
        maxlength: 5,
      },
    }
  ];

  login() {
    const usuarioInput = document.getElementById('usuarioInput') as HTMLIonInputElement;
    const contrasenaInput = document.getElementById('contrasenaInput') as HTMLIonInputElement;

    const nombreUsuario = usuarioInput.value;
    const contrasena = contrasenaInput.value;

    if(nombreUsuario == "Admin" && contrasena == "admin123"){
      this.goToMaterias();
    }else{
      this.mostrarAlertaError();
    };
  }

  async mostrarAlertaError() {
    const alert = await this.alertController.create({
      header: 'Error de inicio de sesión',
      message: 'Usted no esta autorizado para entrar',
      buttons: ['OK']
    });

    await alert.present();
  }
}
