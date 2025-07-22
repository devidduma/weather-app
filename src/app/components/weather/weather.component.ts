import {Component, Input, OnInit} from '@angular/core';
import {WeatherApiService} from "../../services/weather-api.service";
import {DatePipe, DecimalPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {Weather} from "../../models/weather";
import {LocationComponent} from "../location/location.component";
import {Location} from "../../models/location";
import {GeocoderApiService} from "../../services/geocoder-api.service";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    JsonPipe,
    LocationComponent,
    NgIf,
    DatePipe,
    DecimalPipe
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  @Input() weather: Weather = {} as Weather;
  selectedLocation: Location = {} as Location;

  constructor(private dataService: WeatherApiService, private geocoderService: GeocoderApiService) {
  }

  ngOnInit() {
    this.geocoderService.getSelectedLocation().subscribe(location => {
      this.selectedLocation = location;
      this.getWeather(this.selectedLocation.lat, this.selectedLocation.lon);
    });
  }

  getWeather(latitude: number, longitude: number) {
    this.dataService.getWeatherLocation(latitude, longitude, "a9f15ff70141e1cd8f5ae01238c5ad1e", "metric", "english")
      .subscribe(response => {
        this.weather = response;
        console.log(this.weather);
      });
  }
}
