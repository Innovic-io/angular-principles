import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherHeaderComponent } from './components/weather-header/weather-header.component';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { WeatherFooterComponent } from './components/weather-footer/weather-footer.component';

import { WeatherDataService } from './services/weather-data.service';
import { DatePipe } from './date.pipe';
import { WeatherIconComponent } from './components/weather-info/weather-icon/weather-icon.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherHeaderComponent,
    WeatherInfoComponent,
    WeatherFooterComponent,
    DatePipe,
    WeatherIconComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    WeatherDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
