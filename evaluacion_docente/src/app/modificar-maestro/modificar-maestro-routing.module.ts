import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarMaestroPage } from './modificar-maestro.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarMaestroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarMaestroPageRoutingModule {}
