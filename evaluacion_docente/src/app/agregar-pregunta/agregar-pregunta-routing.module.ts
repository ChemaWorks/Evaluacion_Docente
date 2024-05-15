import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarPreguntaPage } from './agregar-pregunta.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarPreguntaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarPreguntaPageRoutingModule {}
