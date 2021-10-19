import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { VacinadoComponent } from './vacinado/vacinado.component';
import { MapaComponent } from './mapa/mapa.component';
import { VoluntarioInserirComponent } from './voluntario/voluntario-inserir/voluntario-inserir.component';
import { VoluntarioListaComponent } from './voluntario/voluntario-lista/voluntario-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    VoluntarioInserirComponent,
    VoluntarioListaComponent,
    CabecalhoComponent,
    VacinadoComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
