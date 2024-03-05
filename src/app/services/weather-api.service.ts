import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  baseUrlApiPath: string = "https://api.openweathermap.org/data/2.5/weather?";

  constructor(private http: HttpClient) { }

  getWeatherLocation(
    latitude: number,
    longitude: number,
    appid: string,
    units: string,
    language: string
  ): Observable<any> {
    let fullUrl: string = this.baseUrlApiPath + "lat=" + latitude.toString() +
      "&lon=" + longitude.toString() + "&appid=" + appid + "&units=" + units.toString() + "&lang=" + language.toString();

    return this.http.get(fullUrl);
  }
}
