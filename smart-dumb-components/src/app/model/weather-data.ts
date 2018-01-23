interface IData {
  time: number;
  summary: string;
  icon: string;
  precipIntensity: number;
  precipProbability: number;
  temperature: number;
  apparentTemperature: number;
  dewPoint: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windGust: number;
  windBearing: number;
  cloudCover: number;
  uvIndex: number;
  visibility: number;
  ozone: number;
}

interface IExtendedData {
  time: number;
  summary: string;
  icon: string;
  sunriseTime: number;
  sunsetTime: number;
  moonPhase: number;
  precipIntensity: number;
  precipIntensityMax: number;
  precipIntensityMaxTime: number;
  precipProbability: number;
  precipAccumulation: number;
  precipType: string;
  temperatureHigh: number;
  temperatureHighTime: number;
  temperatureLow: number;
  temperatureLowTime: number;
  apparentTemperatureHigh: number;
  apparentTemperatureHighTime: number;
  apparentTemperatureLow: number;
  apparentTemperatureLowTime: number;
  dewPoint: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windGust: number;
  windGustTime: number;
  windBearing: number;
  cloudCover: number;
  uvIndex: number;
  uvIndexTime: number;
  visibility: number;
  ozone: number;
  temperatureMin: number;
  temperatureMinTime: number;
  temperatureMax: number;
  temperatureMaxTime: number;
  apparentTemperatureMin: number;
  apparentTemperatureMinTime: number;
  apparentTemperatureMax: number;
  apparentTemperatureMaxTime: number;
}

interface IHourly {
  summary: string;
  icon: string;
  data: IData[];
}

interface IDaily {
  summary: string;
  icon: string;
  data: IExtendedData[];
}

interface IFlags {
  sources: string[];
  'isd-stations': string[];
  units: string;
}

interface IWeatherData {
  latitude: number;
  longitude: number;
  timezone: string;
  currently: IData;
  hourly: IHourly;
  daily: IDaily;
  flags: IFlags;
  offset: number;
}

export class WeatherData implements IWeatherData {
  latitude: number;
  longitude: number;
  timezone: string;
  currently: IData;
  hourly: IHourly;
  daily: IDaily;
  flags: IFlags;
  offset: number;
}
