import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.scss'],
})
export class EntradaComponent implements OnInit {
  public id = String;
  constructor(private _route: ActivatedRoute, private _router: Router) {}
  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
    });
  }
}
