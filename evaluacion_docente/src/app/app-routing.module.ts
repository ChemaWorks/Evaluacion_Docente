import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'materias',
    loadChildren: () => import('./materias/materia.module').then(m => m.MateriaModule) // Asegúrate de que la ruta y el nombre del módulo son correctos
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'preguntas',
    loadChildren: () => import('./preguntas/preguntas.module').then( m => m.PreguntasPageModule)
  },
  {
    path: 'agregar-maestro',
    loadChildren: () => import('./agregar-maestro/agregar-maestro.module').then( m => m.AgregarMaestroPageModule)
  },
  {
    path: 'modificar-maestro',
    loadChildren: () => import('./modificar-maestro/modificar-maestro.module').then( m => m.ModificarMaestroPageModule)
  },
  {
    path: 'agregar-pregunta',
    loadChildren: () => import('./agregar-pregunta/agregar-pregunta.module').then( m => m.AgregarPreguntaPageModule)
  },
  {
    path: 'modificar-pregunta',
    loadChildren: () => import('./modificar-pregunta/modificar-pregunta.module').then( m => m.ModificarPreguntaPageModule)
  },
  {
    path: 'lista-preguntas',
    loadChildren: () => import('./lista-preguntas/lista-preguntas.module').then( m => m.ListaPreguntasPageModule)
  },
  {
    path: 'agregar-materia',
    loadChildren: () => import('./agregar-materia/agregar-materia.module').then( m => m.AgregarMateriaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
