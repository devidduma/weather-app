import {Component, Input, OnInit} from '@angular/core';
import {WeatherApiService} from "../../services/weather-api.service";
import {DatePipe, DecimalPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {Weather} from "../../models/weather";
import {RouterLink} from "@angular/router";
import {LocationComponent} from "../location/location.component";
import {Location} from "../../models/location";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf,
    RouterLink,
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

  selectLocation(location: Location) {
    this.selectedLocation = location;
    this.getWeather(this.selectedLocation.lat, this.selectedLocation.lon);
    console.log("onLocationSelected executed ", location);
  }

  constructor(private dataService: WeatherApiService) {}

  ngOnInit() {
    //this.getWeather(44.1, 19.1);
  }

  getWeather(latitude: number, longitude: number) {
    this.dataService.getWeatherLocation(latitude, longitude, "a9f15ff70141e1cd8f5ae01238c5ad1e", "metric", "english")
      .subscribe(response => {
        this.weather = response;
        console.log(this.weather);
      });
  }
}
