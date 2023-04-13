import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  url = environment.urlBack;
  urlImg = '';

  @Input() user!: any;

  constructor(){
  }
  
  ngOnInit(): void {
    this.urlImg = `${this.url}/api/ingresos/imagen/${this.user.imagen}` 
  }


}
