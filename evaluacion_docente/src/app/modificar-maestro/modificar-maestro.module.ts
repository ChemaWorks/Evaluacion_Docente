import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarMaestroPageRoutingModule } from './modificar-maestro-routing.module';

import { ModificarMaestroPage } from './modificar-maestro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarMaestroPageRoutingModule
  ],
  declarations: [ModificarMaestroPage]
})
export class ModificarMaestroPageModule {}
