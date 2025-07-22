import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import {Weather} from "../models/weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  baseUrlApiPath: string = "https://api.openweathermap.org/data/2.5/weather";

  constructor(private http: HttpClient) { }

  getWeatherLocation(
    latitude: number,
    longitude: number,
    appid: string,
    units: string,
    language: string
  ): Observable<Weather> {
    let fullUrl: string = `${this.baseUrlApiPath}?lat=${latitude}&lon=${longitude}&appid=${appid}&units=${units}&lang=${language}`;

    return this.http.get<Weather>(fullUrl);
  }
}
