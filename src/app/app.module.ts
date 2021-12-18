import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//Modulo personalizado
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el idioma de la app
import localEs from '@angular/common/locales/es-MX'
import localFr from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common';
registerLocaleData(localEs);
registerLocaleData(localFr);


@NgModule({
  declarations: [AppComponent],
  //Organizar por prioridad, primero los modulos de Angular, despues los nuestros
  imports: [BrowserModule, BrowserAnimationsModule, AppRouterModule, PrimeNgModule, SharedModule, VentasModule],
  providers: [
    {  provide: LOCALE_ID, useValue: 'es-MX' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
