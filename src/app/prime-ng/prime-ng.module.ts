import { NgModule } from '@angular/core';

//primeNg - ordenar de manera alfabetica
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule} from 'primeng/menubar';


@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
  ]
})
export class PrimeNgModule { }
