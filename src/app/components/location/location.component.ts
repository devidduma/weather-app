import {Component, OnInit} from '@angular/core';
import {Location} from "../../models/location";
import {GeocoderApiService} from "../../services/geocoder-api.service";
import {DecimalPipe, NgForOf, NgIf} from "@angular/common";
import {Weather} from "../../models/weather";

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [
    NgForOf,
    DecimalPipe,
    NgIf
  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {
  locations: Location[] = [];

  constructor(private geocoder: GeocoderApiService) {}

  ngOnInit() {
  }

  searchLocation(locationName: string) {
    this.geocoder.getLocations(locationName, 2, "a9f15ff70141e1cd8f5ae01238c5ad1e")
      .subscribe(locations => {
        this.locations = locations;
      });
  }

  selectLocation(location: Location) {
    this.locations = [];
    // Save selected location
    this.geocoder.setSelectedLocation(location);
  }
}
