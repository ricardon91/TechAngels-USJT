import { Component, OnDestroy, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { ToastrService } from 'ngx-toastr';
import { Local } from 'src/models/local.model';
import { Voluntario } from 'src/models/voluntario.model';
import { MapaService } from 'src/service/mapa.service';
import { VoluntarioService } from 'src/service/voluntario.service';
import { environment as env } from '../../../environments/environment';

@Component({
  selector: 'app-mapa-voluntario',
  templateUrl: './mapa-voluntario.component.html',
  styleUrls: ['./mapa-voluntario.component.css']
})
export class MapaVoluntarioComponent implements OnInit, OnDestroy {

  mapa: any;
  voluntarios: Voluntario[];  

  constructor(private voluntarioService: VoluntarioService, private mapaService: MapaService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.mapa = L.map('mapa').setView([-23.5489, -46.6388], 11);
    L.tileLayer(env.MAPA_TILE_LAYER, { maxZoom: 19 }).addTo(this.mapa);
    this.getLocalizacoes();
  }

  async getLocalizacoes() {
    const voluntarios = await this.voluntarioService.getVoluntarios().toPromise();
    for (let i = 0; i < voluntarios.length; i++) {
      const coord = await this.mapaService.buscarCoordenadas(voluntarios[i].endereco + " " + voluntarios[i].numero + " " + voluntarios[i].cidade).subscribe(results => {        
        var marker = L.marker([results[0].latitude, results[0].longitude]).addTo(this.mapa) // A primeira posição corresponde a lat(y) e a segunda posição corresponde a lon(x)
        marker.bindPopup("<b>" + voluntarios[i].nome + "</b><br>" + "<b>" + voluntarios[i].endereco + "</b><br>" + "<b>" + voluntarios[i].bairro + ", " + voluntarios[i].cidade + " - " + voluntarios[i].uf + "</b><br>" + "<b>" + voluntarios[i].fone + "</b><br>").openPopup();
      });
    }
  }
  
  ngOnDestroy() {
    this.mapa.invalidateSize();
  }

}
