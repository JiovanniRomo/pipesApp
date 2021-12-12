import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';

import { AppComponent } from './app.component';

//Modulo personalizado
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  //Organizar por prioridad, primero los modulos de Angular, despues los nuestros
  imports: [BrowserModule,  AppRouterModule, PrimeNgModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
