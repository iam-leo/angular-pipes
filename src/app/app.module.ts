import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

// Configuracion del locale de la app
import localeEsAr from '@angular/common/locales/es-AR';
import localeJa from '@angular/common/locales/ja';
import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEsAr );
registerLocaleData( localeJa );

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,

  ],
  providers: [
    // Configurar el idioma por defecto de la app
    { provide: LOCALE_ID, useValue: 'es-AR' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
