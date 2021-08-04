import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { CriptoService } from 'src/app/services/cripto/cripto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'scatter'
    },
    title: {
      text: 'Bitcoin'
    },
    credits: {
      enabled: false
    },
    yAxis: {
      title: {
        text: 'Volume de mercado'
      }
    },
    series: [{
      type: 'line',
      name: 'BTC',
      color: 'black'
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  });

  constructor(private cripto: CriptoService) { }

  ngOnInit(): void {
    this.cripto.getBtc().subscribe((res) => {
      this.chart.addPoint(Math.floor(res.ticker.vol.split('.')[1]))
    });

    setInterval(() => {
      this.cripto.getBtc().subscribe((res) => {
        this.chart.addPoint(Math.floor(res.ticker.vol.split('.')[1]))
      });
    }, 8000);
  }
}
