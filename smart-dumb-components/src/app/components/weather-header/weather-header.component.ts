import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-weather-header',
  templateUrl: './weather-header.component.html',
  styleUrls: ['./weather-header.component.css']
})
export class WeatherHeaderComponent implements OnInit {

  @Input() title;
  @Input() time;

  constructor() {}

  ngOnInit() {}
}
