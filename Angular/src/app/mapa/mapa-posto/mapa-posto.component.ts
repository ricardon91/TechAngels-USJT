import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as L from 'leaflet';
import { MapaService } from 'src/service/mapa.service';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'app-mapa-posto',
  templateUrl: './mapa-posto.component.html',
  styleUrls: ['./mapa-posto.component.css']
})
export class MapaPostoComponent implements OnInit {

  mapa: any;

  constructor(private mapaService: MapaService) { }

  ngOnInit(): void {
    this.mapa = L.map('mapa').setView([-23.5489, -46.6388], 11);
    L.tileLayer(env.MAPA_TILE_LAYER, { maxZoom: 19 }).addTo(this.mapa);
    this.getLocalizacoes();
  }

  async getLocalizacoes() {
    debugger
    const ubs = await this.mapaService.getUBS().toPromise();
    for (let i = 0; i < ubs.length; i++) {
      const coord = await this.mapaService.buscarCoordenadas(ubs[i].endereco + " " + ubs[i].numero + " " + ubs[i].cidade).subscribe(results => {        
        var marker = L.marker([results[0].latitude, results[0].longitude]).addTo(this.mapa) // A primeira posição corresponde a lat(y) e a segunda posição corresponde a lon(x)
        marker.bindPopup("<b>" + ubs[i].nome + "</b><br>" + "<b>" + ubs[i].endereco + "</b><br>" + "<b>" + ubs[i].bairro + ", " + ubs[i].cidade + " - " + ubs[i].uf + "</b><br>" + "<b>" + ubs[i].fone + "</b><br>").openPopup();
      });
    }
  }

}
