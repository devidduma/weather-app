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

    selectedLocation: BehaviorSubject<Location> = new BehaviorSubject<Location>(
        {} as Location
    );

    constructor(private http: HttpClient) {
    }

    getLocations(
        q: string,
        limit: number,
        appid: string
    ): Observable<any> {
        let fullUrl: string = `${this.baseUrlApiPath}?q=${q}&limit=${limit}&appid=${appid}`;

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
}
