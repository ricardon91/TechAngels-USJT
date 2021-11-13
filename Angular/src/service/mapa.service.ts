import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Local } from "src/models/local.model";
import { Ubs } from "src/models/ubs.model";

import { environment as env } from '../environments/environment';

@Injectable()
export class MapaService {

  constructor(private http: HttpClient) {
  }

  buscarCoordenadas(req?: any): Observable<Local[]> {
    let url = `https://${env.BASE_NOMINATIM_URL}/search?format=json&q=${req}`;
    return this.http
      .get<Local[]>(url)
      .pipe(
        map((data: any[]) => data.map((item: any) => new Local(
          item.lat,
          item.lon,
          item.display_name
        ))
        )
      )
  }

  getUBS(): Observable<Ubs[]> {
    return this.http.get<Ubs[]>(env.UBS_MAPA_URL_BASE);
  }

}