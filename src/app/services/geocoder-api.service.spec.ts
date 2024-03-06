import { TestBed } from '@angular/core/testing';

import { GeocoderApiService } from './geocoder-api.service';

describe('GeocoderApiService', () => {
  let service: GeocoderApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeocoderApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
