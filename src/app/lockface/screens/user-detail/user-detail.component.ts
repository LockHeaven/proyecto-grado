import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  bigChart: any[] = [];
  cards: any[] = [];
  pieChart: any[] = [];

  character = {
    id: 1,
    nombre: 'Spiderman',
    tipoUser: 'Admin',
    parentesco: 'Padre',
    img: 'https://image.ondacero.es/clipping/cmsimages01/2021/12/14/4A650856-AD8E-43BE-A6AB-B21A89426CB1/98.jpg?crop=3000,1688,x0,y161&width=1900&height=1069&optimize=high&format=webply'
  };
  
  constructor(private dashboardService: DashboardService) { }
  
  ngOnInit() {
    this.bigChart = this.dashboardService.bigChartFede();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();
  }

}
