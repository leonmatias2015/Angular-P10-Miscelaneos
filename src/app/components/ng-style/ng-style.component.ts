import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [style.fontSize.px] = "tamano">
      Esta es una etiqueta
    </p>

    <button class="btn btn-outline-primary" (click)="tamano = tamano +  5">
    <i class="fas fa-plus"></i>
    </button>
    
    <button class="btn btn-outline-warning" (click)="tamano = tamano -  5">
    <i class="fas fa-minus"></i>
    </button>
  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tamano: number = 15;

  constructor() { }

  ngOnInit() {
  }

}
