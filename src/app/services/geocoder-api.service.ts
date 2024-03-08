import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeocoderApiService {
  baseUrlApiPath = "http://api.openweathermap.org/geo/1.0/direct?";

  selectedLocation: Location = {} as Location;

  constructor(private http: HttpClient) {}

  getLocation(
    q: string,
    limit: number,
    appid: string
  ): Observable<any> {
    let fullUrl: string = this.baseUrlApiPath + "q=" + q.toString() +
      "&limit=" + limit.toString() + "&appid=" + appid;

    return this.http.get<Array<Location>>(fullUrl);
  }

  saveLocation(location: Location) {
    this.selectedLocation = location;
  }
}
