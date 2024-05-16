import { Component, OnInit } from '@angular/core';
import { MaestroService } from '../services/maestros.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  promediosProfesores: { name: string, value: number }[] = [];
  chartData: any; 
  chartOptions: any; 

  constructor(private maestroService: MaestroService) {}

  ngOnInit() {
    let profesoresConPromedios = this.maestroService.obtenerProfesoresConPromedios();
    this.promediosProfesores = profesoresConPromedios.map(profesor => {
      return { name: profesor.maestro, value: profesor.promedio };
    });

    const labels = this.promediosProfesores.map(item => item.name);
    const promedios = this.promediosProfesores.map(item => item.value);

    this.chartData = {
      labels: labels,
      datasets: [{
        type: 'bar',
        label: 'Promedio',
        data: promedios,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ]
      }]
    };

    this.chartOptions = {
      // Aquí puedes configurar las opciones del gráfico
      // como el título, las etiquetas de los ejes, etc.
    };
  }
}