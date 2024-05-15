import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarMaestroPageRoutingModule } from './agregar-maestro-routing.module';

import { AgregarMaestroPage } from './agregar-maestro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarMaestroPageRoutingModule
  ],
  declarations: [AgregarMaestroPage]
})
export class AgregarMaestroPageModule {}
