import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarPreguntaPage } from './modificar-pregunta.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarPreguntaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarPreguntaPageRoutingModule {}
