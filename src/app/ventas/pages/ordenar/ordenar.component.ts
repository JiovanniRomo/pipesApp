import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  mayusculasCondition: boolean = true;
  ordernarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },
  ];

  cambiarEstadoMayusculas() {
    //El valor de this.mayusculasCondition va a ser igual al OPUESTO (!) de su valor actual
    this.mayusculasCondition = !this.mayusculasCondition;
  }

  cambiarOrden(valor: string) {
    this.ordernarPor = valor
  }
}
