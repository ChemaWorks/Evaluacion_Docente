import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { MaestroEvaluationComponent } from './maestro-evaluation/maestro-evaluation.component';

const routes: Routes = [
  {
    path: '',
    component: MaestroEvaluationComponent
  }
];

@NgModule({
  declarations: [MaestroEvaluationComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes) // Importante para configurar las rutas del módulo
  ]
})
export class MaestrosModule { }
