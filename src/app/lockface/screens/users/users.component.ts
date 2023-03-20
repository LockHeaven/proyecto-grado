import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  character = {
    id: 1,
    nombre: 'Spiderman',
    tipoUser: 'Admin',
    parentesco: 'Padre',
    img: 'https://image.ondacero.es/clipping/cmsimages01/2021/12/14/4A650856-AD8E-43BE-A6AB-B21A89426CB1/98.jpg?crop=3000,1688,x0,y161&width=1900&height=1069&optimize=high&format=webply'
  };


}
