import { Component, OnInit } from '@angular/core';
import { Maestro } from '../../maestros/maestro.model';
import { MaestroService } from '../../services/maestros.service';

@Component({
  selector: 'app-maestro-evaluation',
  templateUrl: './maestro-evaluation.component.html',
  styleUrls: ['./maestro-evaluation.component.scss']
})
export class MaestroEvaluationComponent implements OnInit {
  maestros: Maestro[] = [];

  constructor(private maestroService: MaestroService) { }

  ngOnInit() {
    this.maestros = this.maestroService.getMaestros();
  }

  evaluar(maestro: Maestro) {
    console.log('Evaluando a:', maestro.nombre);
    // Aquí se podría navegar a una página de evaluación específica o abrir un modal
  }
}
