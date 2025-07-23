import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, switchMap, timer} from "rxjs";
import {Weather} from "../models/weather";

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  baseUrlApiPath: string = "https://api.openweathermap.org/data/2.5/weather";

  constructor(private http: HttpClient) {
  }

  getWeather(
    latitude: number,
    longitude: number,
    appid: string,
    units: string,
    language: string
  ): Observable<Weather> {
    let fullUrl: string = `${this.baseUrlApiPath}?lat=${latitude}&lon=${longitude}&appid=${appid}&units=${units}&lang=${language}`;

    return this.http.get<Weather>(fullUrl);
  }

  getPollingWeather(
    intervalMinutes: number,
    latitude: number,
    longitude: number,
    appid: string,
    units: string,
    language: string
  ): Observable<Weather> {
    const intervalMs = intervalMinutes * 60 * 1000; // Convert minutes to milliseconds
    return timer(0, intervalMs).pipe(
      switchMap(() => this.getWeather(latitude, longitude, appid, units, language))
    );
  }
}
