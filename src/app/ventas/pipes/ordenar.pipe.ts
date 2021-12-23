import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {
  transform(heroes: Heroe[], orden: string = 'sin valor'): Heroe[] {
    switch (orden) {
      case 'sin valor':
        return heroes;

      case 'nombre':
        //El 1 en positivo significa que queremos cambiar el item de lugar o -1 si necesitamos hacer un cambio inverso
        return heroes = heroes.sort((heroeA, heroeB) => (heroeA.nombre > heroeB.nombre) ? 1 : -1);

      case 'vuela':
        //Los booleans primero se ordenan por false (0) o true (1)
        return heroes = heroes.sort((heroeA, heroeB) => (heroeA.vuela > heroeB.vuela) ? -1 : 1);

      case 'color':
        return heroes = heroes.sort((heroeA, heroeB) => (heroeA.color > heroeB.color) ? 1 : -1);

      default:
        return heroes;
    }
  }
}
