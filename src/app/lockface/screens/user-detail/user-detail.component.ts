import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  bigChart: any[] = [];

  url = environment.urlBack;
  urlImg = '';
  checked = true;

  user!: {
    apellido: string;
    estado: boolean;
    imagen: string;
    nickname: string;
    nombre: string;
    rol: string;
  };

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChartFede();
    this.getUser();
  }

  getUser(): void {
    const nickname = this.route.snapshot.params['id'];
    this.dashboardService.getUserByNickname(nickname).subscribe((data) => {
      this.user = data.usuario[0];
      this.urlImg = `${this.url}/api/ingresos/imagen/${this.user.imagen}`
      this.checked = this.user.estado;
    });
  }

  updateState(): void {
    this.dashboardService
      .updateUser(this.user.nickname, this.checked)
      .subscribe(
        (data) => {
          Swal.fire({
            title: 'Usuario Actualizado',
            text: `Se ha cambiado exitosamente el estado`,
            icon: 'success',
          });
        },
        (err) => {
          Swal.fire({
            title: 'Oops...',
            text: err.error.errors,
            icon: 'error',
          });
        }
      );
  }
}
