import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { WeatherData } from '../model/weather-data';

const url = 'https://api.darksky.net/forecast/47c436a7e96c14385cb23a90b2435f05/43.7385,18.5636?units=si&lang=bs';

@Injectable()
export class WeatherDataService {

  constructor(private http: HttpClient) {}

  getCompleteForecast(): Observable<WeatherData> {

    return this.http.get<WeatherData>(url);
  }
}
