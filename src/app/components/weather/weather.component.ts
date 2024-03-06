import {Component, OnInit} from '@angular/core';
import {WeatherApiService} from "../../services/weather-api.service";
import {JsonPipe} from "@angular/common";
import {GeocoderApiService} from "../../services/geocoder-api.service";
import {Location} from "../../location"
import {Weather} from "../../weather";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    JsonPipe
  ],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
  weather: Weather = {} as Weather;
  location: Array<Location> = [];

  constructor(private dataService: WeatherApiService, private geocoder: GeocoderApiService) {}

  ngOnInit() {
    this.dataService.getWeatherLocation(44.1, 19.1, "a9f15ff70141e1cd8f5ae01238c5ad1e", "metric", "english")
      .subscribe(response => {
        this.weather = response;
        console.log(this.weather);
      });

    this.geocoder.getLocation("London", 3, "a9f15ff70141e1cd8f5ae01238c5ad1e")
      .subscribe(response => {
      this.location = response;
      console.log(this.location);
    });
  }

  getData() {

    console.log(this.location[0].name);
    console.log(this.weather.main.temp_min);
    console.log("hello from the end");
  }
}
