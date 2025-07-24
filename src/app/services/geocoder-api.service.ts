import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {map} from 'rxjs/operators';
import {Location} from "../models/location";

@Injectable({
    providedIn: 'root'
})
export class GeocoderApiService {
    baseUrlApiPath = "https://api.openweathermap.org/geo/1.0/direct";
    ipLocationUrl = "https://www.ipinfo.io";
    appId: string = "a9f15ff70141e1cd8f5ae01238c5ad1e";

    selectedLocation: BehaviorSubject<Location> = new BehaviorSubject<Location>(
        {} as Location
    );

    constructor(private http: HttpClient) {
      this.getIpLocation();
    }

    getLocations(
        q: string,
        limit: number
    ): Observable<Location[]> {
        let fullUrl: string = `${this.baseUrlApiPath}?q=${q}&limit=${limit}&appid=${this.appId}`;

        return this.http.get<any[]>(fullUrl).pipe(
            map((response: any[]) => {
                return response.map((data: any) => {
                    const location = new Location(); // Create a new instance of Location
                    Object.assign(location, data); // Copy all properties from the raw object to the new instance
                    return location;
                })
            })
        );
    }

    setSelectedLocation(location: Location) {
        this.selectedLocation.next(location);
    }

    getSelectedLocation() {
        return this.selectedLocation.asObservable();
    }

    getIpLocation() {
      // Query Urls
      let queryCity = `${this.ipLocationUrl}/city`;
      let queryCountry = `${this.ipLocationUrl}/country`;

      // Address
      let address: string = "";
      this.http.get(queryCity, {responseType: 'text'}).subscribe(city => {
        address = city.trim();
        this.http.get(queryCountry, {responseType: 'text'}).subscribe(country => {
          address = `${address}, ${country.trim()}`;

          // Set location of IP
          this.getLocations(address, 1).subscribe(locations => {
            this.setSelectedLocation(locations[0]);
          });
        });
      });
    }
}
