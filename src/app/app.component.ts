import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {WeatherApiService} from "./services/weather-api.service";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private dataService: WeatherApiService) {}

  ngOnInit() {
    this.dataService.getWeatherLocation(44.1, 19.1, "a9f15ff70141e1cd8f5ae01238c5ad1e", "metric", "english")
      .subscribe(response => {
      this.data = response;
      console.log(this.data);
    });
  }
}
