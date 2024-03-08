import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {JsonPipe} from "@angular/common";
import {WeatherComponent} from "./components/weather/weather.component";
import {LocationComponent} from "./location/location.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, WeatherComponent, LocationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
