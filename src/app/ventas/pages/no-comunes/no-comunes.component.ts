import { Component } from '@angular/core';
import { interval } from 'rxjs';

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

  cambiarCliente() {
    // this.nombre = 'Jiovanni';
    // this.genero = 'Masculino';

    if(this.genero === 'Masculino') {
      this.nombre = 'Susana'
      this.genero = 'Femenino';
    } else {
      this.nombre = 'Jiovanni'
      this.genero = 'Masculino';
    }
  }

  borrarCliente() {
    this.clientes.pop();
    console.log(this.clientes.length);
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Jiovanni',
    edad: 18,
    direccion: 'Somewhere'
  }


  //Async pipe
  //Este observable emitira valores numericos cada cierto tiempo
  miObservable = interval(1000);

  valorPromesa = new Promise( resolve => { 
    setTimeout(() => {
      resolve('Tenemos data de la promesa');
    }, 3500)
  })
}
