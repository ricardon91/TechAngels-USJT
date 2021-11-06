import { Component, OnDestroy, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { environment as env } from '../../../environments/environment';


@Component({
  selector: 'app-mapa-voluntario',
  templateUrl: './mapa-voluntario.component.html',
  styleUrls: ['./mapa-voluntario.component.css']
})
export class MapaVoluntarioComponent implements OnInit, OnDestroy {

  mapa: any;

  constructor() { }

  ngOnInit(): void {
    this.mapa = L.map('mapa').setView([-23.5489, -46.6388], 11);
    L.tileLayer(env.MAPA_TILE_LAYER, { maxZoom: 19 }).addTo(this.mapa);
  }

  ngOnDestroy() {
    this.mapa.invalidateSize();
  }

}
