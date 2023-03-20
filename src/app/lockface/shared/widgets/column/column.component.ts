import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {
  
  chartOptions: any;
  @Input() data: any = [];

  Highcharts = Highcharts;

  constructor() {}

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: 'column',
      },
      xAxis: {
        categories: [
          'Apr 12',
          'Apr 13',
          'Apr 14',
          'Apr 15',
          'Apr 16',
          'Apr 17',
          'Today',
        ],
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
                format: '{y} Visits'
            }
        }
      },
      tooltip: {
        stickOnContact: true,
        valueSuffix: ' Visits',
      },
      legend: {
        enabled: false
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

}
