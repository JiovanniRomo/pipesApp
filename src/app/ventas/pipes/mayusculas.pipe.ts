import { Pipe, PipeTransform } from '@angular/core';

// El PipeTransform es el method que se va a ejecutar cuando alguien manda a llamar a nuestro pipe
@Pipe({
    name: 'mayusculas',
})
export class MayusculasPipe implements PipeTransform {

    //Pipe sin argumentos
    // transform(value: string): string {
    //     return value.toUpperCase();
    // }

    transform(value: string, mayusculas: boolean = true) {
        return (mayusculas) ? value.toUpperCase() : value.toLowerCase();
    }
}

// Los pipes sirven para transformar la informacion que reciben
