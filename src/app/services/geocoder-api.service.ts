import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeocoderApiService {
  baseUrlApiPath = "https://api.openweathermap.org/geo/1.0/direct";

  constructor(private http: HttpClient) {}

  getLocation(
    q: string,
    limit: number,
    appid: string
  ): Observable<any> {
    let fullUrl: string = `${this.baseUrlApiPath}?q=${q}&limit=${limit}&appid=${appid}`;

    return this.http.get<Location[]>(fullUrl);
  }
}
