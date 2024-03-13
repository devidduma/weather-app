import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Location} from "../../models/location";
import {GeocoderApiService} from "../../services/geocoder-api.service";
import {DecimalPipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {Weather} from "../../models/weather";
import {WeatherComponent} from "../weather/weather.component";

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    DecimalPipe,
    JsonPipe,
    NgIf,
    WeatherComponent
  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {
  locations: Array<Location> = [];
  @Output() onLocationSelected: EventEmitter<Location> = new EventEmitter<Location>();
  @Input() weather: Weather = {} as Weather;

  constructor(private geocoder: GeocoderApiService) {}

  ngOnInit() {
    //this.searchLocation("London");
  }

  searchLocation(locationName: string) {
    this.weather = {} as Weather;
    console.log(this.weather);

    this.geocoder.getLocation(locationName, 3, "a9f15ff70141e1cd8f5ae01238c5ad1e")
      .subscribe(response => {
        this.locations = response;
        console.log(this.locations);
      });
  }

  selectLocation(location: Location) {
    this.onLocationSelected.emit(location);
    console.log(location);
    this.locations = [];
  }
}
