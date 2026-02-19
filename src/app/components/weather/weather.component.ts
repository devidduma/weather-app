import {Component, OnInit} from '@angular/core';
import {WeatherApiService} from "../../services/weather-api.service";
import {AsyncPipe, DecimalPipe, JsonPipe, NgIf} from "@angular/common";
import {Weather} from "../../models/weather";
import {LocationComponent} from "../location/location.component";
import {Location} from "../../models/location";
import {GeocoderApiService} from "../../services/geocoder-api.service";
import {Observable, of, switchMap} from "rxjs";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    JsonPipe,
    LocationComponent,
    NgIf,
    DecimalPipe,
    AsyncPipe
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  weather!: Observable<Weather>;
  selectedLocation!: Observable<Location>;

  constructor(private dataService: WeatherApiService, private geocoderService: GeocoderApiService) {
  }

  ngOnInit() {
    this.selectedLocation = this.geocoderService.getSelectedLocation();

    this.weather = this.geocoderService.getSelectedLocation().pipe(
      switchMap(location => {
        if (!location?.lat || !location?.lon) {
          return of({} as Weather);
        }
        return this.getWeather(location.lat, location.lon);
      })
    );
  }

  getWeather(latitude: number, longitude: number): Observable<Weather> {
    return this.dataService.getPollingWeather(10, latitude, longitude, "a9f15ff70141e1cd8f5ae01238c5ad1e", "metric", "english");
  }
}
