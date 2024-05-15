import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarPreguntaPageRoutingModule } from './agregar-pregunta-routing.module';

import { AgregarPreguntaPage } from './agregar-pregunta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarPreguntaPageRoutingModule
  ],
  declarations: [AgregarPreguntaPage]
})
export class AgregarPreguntaPageModule {}
