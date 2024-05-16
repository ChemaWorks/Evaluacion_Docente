import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  esAdmin: boolean = false; // Variable para controlar la visibilidad
  matriculas: string[] = [];

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
        handler: (value: any) => {
            const matricula = value[0];
            if (matricula == "") {
                this.mostrarAlertaVacio();
            } else {
                let storedMatriculas = localStorage.getItem('matriculas');
                let matriculasArray = storedMatriculas ? JSON.parse(storedMatriculas) : [];

                if (matriculasArray.includes(matricula)) {
                    this.mostrarAlertaAlumno();
                } else {
                    this.goToMaterias();
                    localStorage.setItem('isAdmin', 'false');
                    
                    matriculasArray.push(matricula);
                    
                    localStorage.setItem('matriculas', JSON.stringify(matriculasArray));
                }
            }
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

  async mostrarAlertaAlumno() {
    const alert = await this.alertController.create({
      header: 'Error Duplicado',
      message: 'Usted ya realizo la evaluacion',
      buttons: ['OK']
    });
    await alert.present();
  }

  async mostrarAlertaVacio() {
    const alert = await this.alertController.create({
      header: 'Error Vacio',
      message: 'Campo Vacio',
      buttons: ['OK']
    });
    await alert.present();
  }
}