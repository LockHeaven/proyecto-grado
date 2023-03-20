import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: 'Lucia',
      data: [5, 10, 20, 15, 45, 14, 52, 8, 20, 5, 25, 23]
    }, {
      name: 'Federico',
      data: [20, 10, 21, 2, 13, 16, 29, 7, 4, 6, 24, 18]
    }, {
      name: 'Valentina',
      data: [2, 2, 2, 6, 13, 30, 46, 21, 2, 15, 45, 52]
    }];
  }

  bigChartFede(): any[] {
    return [{
      name: 'Federico',
      data: [20, 10, 21, 2, 13, 16, 29]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'Lucia',
      y: 70,
      sliced: true,
      selected: true
    }, {
      name: 'Federico',
      y: 20
    }, {
      name: 'Valentina',
      y: 10
    }];
  }
}
