import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  esAdmin: boolean = false; // Variable para controlar la visibilidad

  constructor(private navCtrl: NavController, private alertController: AlertController) {}

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
        localStorage.setItem('isAdmin', 'false'); 
      }
    }
  ];

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

    if (nombreUsuario === "Admin" && contrasena === "admin123") {
      this.esAdmin = true; // Activar la vista del administrador
      this.goToMaterias();
      localStorage.setItem('isAdmin', 'true'); 
    } else {
      this.mostrarAlertaError();
      localStorage.setItem('isAdmin', 'false'); 
    }
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