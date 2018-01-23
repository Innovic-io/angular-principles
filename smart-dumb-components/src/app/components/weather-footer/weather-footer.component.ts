import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-weather-footer',
  templateUrl: './weather-footer.component.html',
  styleUrls: ['./weather-footer.component.css']
})
export class WeatherFooterComponent implements OnInit {

  @Input() credits;

  constructor() {}

  ngOnInit() {}
}
