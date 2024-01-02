import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.scss']
})
export class EntradasComponent {
  @Input() datos:any;
}
