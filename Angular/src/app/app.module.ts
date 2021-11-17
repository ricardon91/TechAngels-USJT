import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { VacinadoComponent } from './vacinado/vacinado.component';

import { VoluntarioInserirComponent } from './voluntario/voluntario-inserir/voluntario-inserir.component';
import { VoluntarioListaComponent } from './voluntario/voluntario-lista/voluntario-lista.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VoluntarioService } from 'src/service/voluntario.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MapaVoluntarioComponent } from './mapa/mapa-voluntario/mapa-voluntario.component';
import { MapaPostoComponent } from './mapa/mapa-posto/mapa-posto.component';
import { ToastrModule } from 'ngx-toastr';
import { MapaService } from 'src/service/mapa.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VoluntarioInserirComponent,
    VoluntarioListaComponent,
    CabecalhoComponent,
    VacinadoComponent,
    MapaVoluntarioComponent,
    MapaPostoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,    
    MatTableModule,
    MatPaginatorModule,
    ToastrModule.forRoot()   
  ],
  providers: [VoluntarioService, MapaService],
  bootstrap: [AppComponent],
})
export class AppModule { }
