import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  url = environment.urlBack;
  urlImg = '';

  user:{
    nickname: string,
    nombre: string,
    apellido: string,
    rol: string,
    estado: boolean,
    imagen: string
  };

  constructor( private authService: AuthService ){
    this.user = this.authService.usuario;
    this.urlImg = `${this.url}/api/ingresos/imagen/${this.user.nickname}.jpg` 
  }



}
