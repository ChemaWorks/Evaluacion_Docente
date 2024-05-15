import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarMaestroPage } from './agregar-maestro.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarMaestroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarMaestroPageRoutingModule {}
