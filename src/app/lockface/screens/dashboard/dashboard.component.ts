import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart: any[] = [];
  cards: any[] = [];
  pieChart: any[] = [];

  arrayLastWeek: any[] = [];
  ingresosUltSem: any[] = [];

  displayedColumns: string[] = ['username', 'name', 'lastname', 'typeUser', 'acces'];
  dataSource: any;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getUsers();
    this.getIngresos();
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
  }

  getUsers(): void {
    this.dashboardService.getUsers().subscribe((res) => {
      this.dataSource = new MatTableDataSource<any>(res)
      this.dataSource.paginator = this.paginator;
    })
  }

  getIngresos(): void {
    this.dashboardService.getIngresos().subscribe((res) => {
      this.ingresosUltSem = res['ingresos'];
      console.log('Ingresos', this.ingresosUltSem);
      this.lastWeek();
      this.ingresosUltSem.forEach(element => {
        // console.log(element)
      });
    })
  }

  lastWeek(): void {
    let fechaArrayUser:any[] = [];
    let fechaArray;
    let user:any[] = [];
    this.ingresosUltSem.forEach((data) => {
      const fecha = new Date(data.fecha).toLocaleDateString();
      fechaArrayUser.push(fecha);
    })
    for (let i = 7; i >= 0; i--) {
      const fecha = new Date();
      fechaArray = new Date(
        fecha.setDate(fecha.getDate() - i)
      ).toLocaleDateString();
      fechaArrayUser.forEach((data, i) => {
        if(data === fechaArray){
          user.push
        }
      })
      this.arrayLastWeek.push(fechaArray);
    }
  }

}
