import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.css']
})
export class WeatherIconComponent implements OnInit {

  @ViewChild('icon') iconEl: ElementRef;

  @Input() set icon(data) {

    if (data) {

      const skycons = new Skycons({"color": "white"});
      skycons.add(this.iconEl.nativeElement, Skycons[data.toUpperCase()]);
      skycons.play();
    }

  };

  constructor() { }

  ngOnInit() {}

}
