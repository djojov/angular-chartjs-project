import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { ChartService } from 'src/app/services/chart.service';

@Component({
  selector: 'app-blood-pressure',
  templateUrl: './blood-pressure.component.html',
  styleUrls: ['./blood-pressure.component.scss'],
})
export class BloodPressureComponent implements OnInit {
  chart: any = [];
  result: any;
  bpSysData: any;
  bpDiaData: any;
  labels: any;
  resultCategories: any;
  chartCategories: any;

  constructor(private service: ChartService) {}

  ngOnInit() {
    this.service.getChartData().subscribe((res) => {
      this.resultCategories = res;

      const bpCategories = this.resultCategories.data.map((entry: any) => {
        const sysBP = entry['BP sys [mmHg]'];
        const diaBP = entry['BP dia [mmHg]'];
        if (sysBP < 120 && diaBP < 80) {
          return 'Normal';
        } else if (sysBP >= 120 && sysBP < 130 && diaBP < 80) {
          return 'Elevated';
        } else if ((sysBP >= 130 && sysBP < 140) || (diaBP >= 80 && diaBP < 90)) {
          return 'High Blood Pressure (Hypertension) Stage 1';
        } else if (sysBP >= 140 || diaBP >= 90) {
          return 'High Blood Pressure (Hypertension) Stage 2';
        } else {
          return 'Other';
        }
      });

      const categoryCounts: any = {};
      bpCategories.forEach((category: any) => {
        categoryCounts[category] = (categoryCounts[category] || 0) + 1;
      });

      const categoryLabels = Object.keys(categoryCounts);
      const categoryData = Object.values(categoryCounts);

      this.chartCategories = new Chart('canvasCategories', {
        type: 'bar',
        data: {
          labels: undefined,
          datasets: [
            {
              label: 'Category Counts',
              data: null,
              backgroundColor: 'rgba(166, 255, 0, 0.4)',
              borderWidth: 2,
              borderColor: 'rgba(166, 255, 0, 1)',
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
                text: 'Blood Pressure Category',
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
                text: 'Count',
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

      let currentIndex = 0;
      setInterval(() => {
        if (currentIndex < 4) {
          this.chartCategories.data.datasets[0].data.push(categoryData[currentIndex]);
          this.chartCategories.data.labels.push(categoryLabels[currentIndex]);
          currentIndex++;
          this.chartCategories.update();
        }
      }, 1000);
    });

    this.service.getChartData().subscribe((res) => {
      this.result = res;
      console.log(this.result);
      this.bpSysData = this.result.data.map((entry: any) => entry['BP sys [mmHg]']);
      this.bpDiaData = this.result.data.map((entry: any) => entry['BP dia [mmHg]']);
      this.labels = this.result.data.map((entry: any) => entry.Time);

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: undefined,
          datasets: [
            {
              label: 'BP sys',
              data: null,
              borderColor: '#3797f0',
              borderWidth: 2,
              backgroundColor: '#3797f0',
            },
            {
              label: 'BP dia',
              data: null,
              borderColor: '#f34141',
              borderWidth: 2,
              backgroundColor: '#f34141',
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
        this.chart.data.datasets[0].data.push(this.bpSysData[currentIndex]);
        this.chart.data.datasets[1].data.push(this.bpDiaData[currentIndex]);
        this.chart.data.labels.push(this.labels[currentIndex]);
        currentIndex++;
        this.chart.update();
      }
    }, 1000);
  }
}
