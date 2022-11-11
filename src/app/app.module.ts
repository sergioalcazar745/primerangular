import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimerComponent } from 'src/components/primercomponent/primer.component';
import { HooksAngular } from 'src/components/hooksangular/hooksangular.component';
import { Deportes } from 'src/components/deportes/deporte.component';
import { FormsModule } from '@angular/forms';
import { FormularioBindingComponent } from 'src/components/formulario/formulariobinding.component';
import { SumarNumero } from 'src/components/formularioSumarNumeros/sumarnumeros.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponent,
    HooksAngular,
    Deportes,
    FormularioBindingComponent,
    SumarNumero
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
