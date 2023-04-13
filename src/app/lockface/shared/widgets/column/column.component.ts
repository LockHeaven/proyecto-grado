import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent implements OnInit {
  chartOptions: any;
  @Input() data: any = [];
  arrayLastWeek: any[] = [];

  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.lastWeek();
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      xAxis: {
        categories: this.arrayLastWeek,
      },
      title: {
        text: 'Visitas Ultima Semana',
      },
      subtitle: {
        text: 'Demo',
      },
      plotOptions: {
        column: {
          dataLabels: {
            enabled: true,
            format: '{y} Visits',
          },
        },
      },
      tooltip: {
        stickOnContact: true,
        valueSuffix: ' Visits',
      },
      legend: {
        enabled: false,
      },
      exporting: {
        enabled: true,
      },
      series: this.data,
    };

    HC_exporting(Highcharts);

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

  lastWeek(): void {
    let fechaArray;
    for (let i = 6; i >= 0; i--) {
      if (i === 0) {
        this.arrayLastWeek.push('Today');
        break;
      }
      const fecha = new Date();
      fechaArray = new Date(
        fecha.setDate(fecha.getDate() - i)
      ).toLocaleDateString();
      this.arrayLastWeek.push(fechaArray);
    }
  }
}
