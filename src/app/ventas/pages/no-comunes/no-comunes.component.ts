import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  //i18nSelect
  nombre: string = 'Susana';
  genero: string = 'Femenino';

  invitacionMap = {
    'Masculino': 'invitarlo',
    'Femenino': 'invitarla'
  }

  //i18nPlural - usar cuando tengamos varias opciones
  clientes: string[] = ['Maria', 'Juan', 'Pedro']
  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }
}
