import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { LocalVoluntario } from "src/models/locaisVoluntarios.model";
import { environment as env } from '../environments/environment';

@Injectable()
export class MapaService {

  constructor(private http: HttpClient) {
  }

  buscarCoordenadas(req?: any): Observable<LocalVoluntario[]> {
    let url = `https://${env.BASE_NOMINATIM_URL}/search?format=json&q=${req}`;
    return this.http
      .get<LocalVoluntario[]>(url)
      .pipe(
        map((data: any[]) => data.map((item: any) => new LocalVoluntario(
          item.lat,
          item.lon,
          item.display_name                    
        ))
        )
      )      
  }

}