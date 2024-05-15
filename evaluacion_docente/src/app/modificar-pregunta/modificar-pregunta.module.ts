import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarPreguntaPageRoutingModule } from './modificar-pregunta-routing.module';

import { ModificarPreguntaPage } from './modificar-pregunta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarPreguntaPageRoutingModule
  ],
  declarations: [ModificarPreguntaPage]
})
export class ModificarPreguntaPageModule {}
