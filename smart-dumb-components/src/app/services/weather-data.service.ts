import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { WeatherData } from '../model/weather-data';

const url = 'https://cors.now.sh/https://proxynow-znquoiutar.now.sh';

@Injectable()
export class WeatherDataService {

  constructor(private http: HttpClient) {}

  getCompleteForecast(): Observable<WeatherData> {

    return this.http.get<WeatherData>(url);
  }
}
