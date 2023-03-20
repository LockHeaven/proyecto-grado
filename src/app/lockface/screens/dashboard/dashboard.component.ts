import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../../services/dashboard.service';

export interface PeriodicElement {
  name: string;
  visits: number;
  typeUser: string;
  parentesco: string;
  acceso: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Lucia', visits:50, typeUser: 'Admin', parentesco: 'Padre', acceso: 'SI' },
  { name: 'Federico', visits:20, typeUser: 'Familiar', parentesco: 'Madre', acceso: 'NO' },
  { name: 'Valentina', visits:10, typeUser: 'Visitor', parentesco: 'Hija', acceso: 'SI' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart: any[] = [];
  cards: any[] = [];
  pieChart: any[] = [];

  displayedColumns: string[] = ['name', 'visits', 'typeUser', 'parentesco', 'acceso'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}
