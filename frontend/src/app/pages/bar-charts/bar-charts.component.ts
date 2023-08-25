import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-charts',
  templateUrl: './bar-charts.component.html',
  styleUrls: ['./bar-charts.component.scss'],
})
export class BarChartsComponent {
  chart: any = [];
  result: any;
  coinPrice: any;
  coinName: any;

  // constructor(private service: ChartService) {}

  // ngOnInit() {
  //   this.service.cryptoData().subscribe((res) => {
  //     this.result = res;
  //     console.log(this.result);
  //     this.coinPrice = this.result.data.coins.map((coins: any) => coins.price);
  //     this.coinName = this.result.data.coins.map((coins: any) => coins.name);

  //     this.chart = new Chart('canvas', {
  //       type: 'bar',
  //       data: {
  //         labels: undefined,
  //         datasets: [
  //           {
  //             data: null,
  //             label: 'Coin Price',
  //             backgroundColor: [
  //               '#b45248',
  //               '#a6ff00',
  //               '#2192ff',
  //               '#ff55bb',
  //               '#7e22ce',
  //               '#ffb84c',
  //               '#3b0000',
  //               '#00ead3',
  //               '#ff94cc',
  //               '#f7fd04',
  //             ],
  //             borderWidth: 1,
  //           },
  //         ],
  //       },
  //     });
  //   });

  //   let currentIndex = 0;
  //   setInterval(() => {
  //     if (currentIndex < 10) {
  //       this.chart.data.datasets[0].data.push(this.coinPrice[currentIndex]);
  //       this.chart.data.labels.push(this.coinName[currentIndex]);
  //       currentIndex++;
  //       this.chart.update();
  //     }
  //   }, 1000);
  // }
}
