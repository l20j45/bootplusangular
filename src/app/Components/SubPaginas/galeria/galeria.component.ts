import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
})
export class GaleriaComponent {
  public img = String;
  public imageArray = [
    'galeria_01.jpg',
    'galeria_02.jpg',
    'galeria_03.jpg',
    'galeria_04.jpg',
    'galeria_05.jpg',
    'galeria_06.jpg',
    'galeria_07.jpg',
    'galeria_08.jpg',
    'galeria_09.jpg',
  ];
  constructor() {}
  changedata(event: any) {
    this.img = event.target.currentSrc.substr(
      21,
      event.target.currentSrc.lenght
    );
  }
}
