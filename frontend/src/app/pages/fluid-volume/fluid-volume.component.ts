import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-fluid-volume',
  templateUrl: './fluid-volume.component.html',
  styleUrls: ['./fluid-volume.component.scss'],
})
export class FluidVolumeComponent implements OnInit {
  chart: any = [];
  result: any;
  fluidVolumeData: any;
  icwData: any;
  labels: any;

  constructor(private service: ChartService) {}

  ngOnInit() {
    this.service.getChartData().subscribe((res) => {
      this.result = res;
      console.log(this.result);
      this.fluidVolumeData = this.result.data.map((entry: any) => entry['OH [L]']);
      this.icwData = this.result.data.map((entry: any) => entry['ICW [L]']);
      this.labels = this.result.data.map((entry: any) => entry.Time);

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: undefined,
          datasets: [
            {
              label: 'Fluid Volume',
              data: null,
              borderColor: '#a6ff00',
              borderWidth: 2,
              backgroundColor: '#a6ff00',
              tension: 0.5,
              pointStyle: 'circle',
              pointRadius: 4,
              pointHoverRadius: 6,
              pointBackgroundColor: '#fff',
              pointBorderColor: '#a6ff00',
            },
            {
              label: 'ICW',
              data: null,
              borderColor: '#ff94cc',
              borderWidth: 2,
              backgroundColor: '#ff94cc',
              tension: 0.5,
              pointStyle: 'circle',
              pointRadius: 4,
              pointHoverRadius: 6,
              pointBackgroundColor: '#fff',
              pointBorderColor: '#ff94cc',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Time',
                font: {
                  size: 18,
                  family: 'Satoshi',
                },
                color: '#2c2f32',
              },
              ticks: {
                padding: 20,
              },
            },
            y: {
              title: {
                display: true,
                text: 'Blood Pressure (mmHg)',
                font: {
                  size: 18,
                  family: 'Satoshi',
                },
                color: '#2c2f32',
              },
              ticks: {
                padding: 20,
              },
            },
          },
        },
      });
    });

    let currentIndex = 0;
    setInterval(() => {
      if (currentIndex < this.result.data.length) {
        this.chart.data.datasets[0].data.push(this.fluidVolumeData[currentIndex]);
        this.chart.data.datasets[1].data.push(this.icwData[currentIndex]);
        this.chart.data.labels.push(this.labels[currentIndex]);
        currentIndex++;
        this.chart.update();
      }
    }, 800);
  }
}
