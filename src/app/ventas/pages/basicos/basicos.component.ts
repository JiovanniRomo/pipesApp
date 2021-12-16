import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'JIOVANNI';
  nombreUpper: string = 'jiovanni';
  nombreCompleto: string = 'jiovanni romo';

  fecha: Date = new Date();

}

