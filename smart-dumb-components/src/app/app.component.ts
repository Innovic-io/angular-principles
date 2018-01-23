import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { WeatherData } from './model/weather-data';
import { Credit } from './model/credit';

import { WeatherDataService } from './services/weather-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Jahorina';
  time = new Date().toLocaleTimeString();

  weatherData$: Observable<WeatherData>;

  credits: Credit[] = [
    {
      title: 'Dark Sky',
      link: 'https://darksky.net/'
    },
    {
      title: 'Flaticon',
      link: 'https://www.flaticon.com/'
    }
  ];

  constructor(private weatherData: WeatherDataService) {

    this.weatherData$ = this.weatherData.getCompleteForecast();
  }
}
