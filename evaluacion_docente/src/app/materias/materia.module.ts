import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; // Asegúrate de que está correctamente importado
import { MateriaListComponent } from './materia-list/materia-list.component';

@NgModule({
  declarations: [MateriaListComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: MateriaListComponent }]) // Revisa la ruta y el componente
  ],
  exports: [MateriaListComponent]
})
export class MateriaModule { }
