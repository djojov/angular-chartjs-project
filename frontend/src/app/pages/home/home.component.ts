import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  chart: any;
  result: any;
  fluidVolumeData: any;
  bpSysData: any;
  bpDiaData: any;
  bloodPressureChart: any;
  fluidVolumeChart: any;

  constructor(private service: ChartService) {}

  ngOnInit() {
    this.service.getChartData().subscribe((res) => {
      this.result = res;
      this.fluidVolumeData = this.result.data.map((entry: any) => entry['OH [L]']);
      this.bpSysData = this.result.data.map((entry: any) => entry['BP sys [mmHg]']);
      this.bpDiaData = this.result.data.map((entry: any) => entry['BP dia [mmHg]']);

      this.bloodPressureChart = this.bpSysData.map((value: any, index: any) => ({
        x: value,
        y: this.bpDiaData[index],
      }));
      this.fluidVolumeChart = this.fluidVolumeData.map((value: any, index: any) => ({
        x: value,
        y: this.bpSysData[index],
      }));

      this.chart = new Chart('canvas', {
        type: 'scatter',
        data: {
          datasets: [
            {
              label: 'Blood Pressure',
              data: null,
              borderColor: '#b45248',
              backgroundColor: '#b45248',
            },
            {
              label: 'Fluid Volume',
              data: null,
              borderColor: 'rgb(126, 34, 206)',
              borderWidth: 2,
              backgroundColor: 'rgb(126, 34, 206)',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Fluid Volume (L)',
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
        this.chart.data.datasets[0].data.push(this.bloodPressureChart[currentIndex]);
        this.chart.data.datasets[1].data.push(this.fluidVolumeChart[currentIndex]);
        currentIndex++;
        this.chart.update();
      }
    }, 800);
  }
}
