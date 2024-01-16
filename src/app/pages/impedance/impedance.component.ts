import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-impedance',
  templateUrl: './impedance.component.html',
  styleUrls: ['./impedance.component.scss'],
})
export class ImpedanceComponent implements OnInit {
  chart: any = [];
  result: any;
  z5kHzData: any;
  z15kHzData: any;
  z35kHzData: any;
  z100kHzData: any;
  z1000kHzData: any;
  labels: any;

  constructor(private service: ChartService) {}

  ngOnInit() {
    this.service.getChartData().subscribe((res) => {
      this.result = res;
      console.log(this.result);
      this.z5kHzData = this.result.data.map((entry: any) => entry['Z 5 kHz [Ohm]']);
      this.z15kHzData = this.result.data.map((entry: any) => entry['Z 15 kHz [Ohm]']);
      this.z35kHzData = this.result.data.map((entry: any) => entry['Z 35 kHz [Ohm]']);
      this.z100kHzData = this.result.data.map((entry: any) => entry['Z 100 kHz [Ohm]']);
      this.z1000kHzData = this.result.data.map((entry: any) => entry['Z 1000 kHz [Ohm]']);
      this.labels = this.result.data.map((entry: any) => entry.Date);

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: undefined,
          datasets: [
            {
              label: 'Z 5 kHz',
              data: null,
              borderColor: 'rgb(166, 255, 0)',
              borderWidth: 2,
              backgroundColor: 'rgba(166, 255, 0, 0.5)',
            },
            {
              label: 'Z 15 kHz',
              data: null,
              borderColor: 'rgb(255, 148, 204)',
              borderWidth: 2,
              backgroundColor: 'rgba(255, 148, 204, 0.5)',
            },
            {
              label: 'Z 35 kHz',
              data: null,
              borderColor: 'rgb(0, 234, 211)',
              borderWidth: 2,
              backgroundColor: 'rgba(0, 234, 211, 0.5)',
            },
            {
              label: 'Z 100 kHz',
              data: null,
              borderColor: 'rgb(126, 34, 206)',
              borderWidth: 2,
              backgroundColor: 'rgba(126, 34, 206, 0.5)',
            },
            {
              label: 'Z 1000 kHz',
              data: null,
              borderColor: 'rgb(33, 146, 255)',
              borderWidth: 2,
              backgroundColor: 'rgba(33, 146, 255, 0.5)',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          indexAxis: 'y',
          scales: {
            x: {
              title: {
                display: true,
                text: 'Impedance (Ohm)',
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
                text: 'Date',
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
        this.chart.data.datasets[0].data.push(this.z5kHzData[currentIndex]);
        this.chart.data.datasets[1].data.push(this.z15kHzData[currentIndex]);
        this.chart.data.datasets[2].data.push(this.z35kHzData[currentIndex]);
        this.chart.data.datasets[3].data.push(this.z100kHzData[currentIndex]);
        this.chart.data.datasets[4].data.push(this.z1000kHzData[currentIndex]);
        this.chart.data.labels.push(this.labels[currentIndex]);
        currentIndex += 10;
        this.chart.update();
      }
    }, 2000);
  }
}
