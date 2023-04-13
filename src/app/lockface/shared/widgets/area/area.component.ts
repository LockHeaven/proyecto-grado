import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
})
export class AreaComponent implements OnInit {
  chartOptions: any;
  @Input() data: any = [];

  Highcharts = Highcharts;
  arrayLastWeek: any[] = [];
  constructor() {}

  ngOnInit() {
    this.lastWeek();
    this.chartOptions = {
      chart: {
        type: 'area',
      },
      xAxis: {
        categories: [...this.arrayLastWeek],
      },
      title: {
        text: 'Visitas en el Año',
      },
      subtitle: {
        text: 'Demo',
      },
      tooltip: {
        split: true,
        valueSuffix: ' Visits',
      },
      credits: {
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

    console.log(this.arrayLastWeek);
  }
}
