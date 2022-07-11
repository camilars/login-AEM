import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, Input, OnInit, LOCALE_ID, Inject } from "@angular/core";
import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";
import { WeatherForecastService } from "src/app/services/weather-forecast/weather-forecast.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Input() imagePath: {
    url: string;
  };

  lat: number;
  lng: number;
  latLng: string;
  subscription: Subscription;
  location: string;
  temperature: string;
  icon: string;
  dateFormat = "EEEE, d MMMM, y";
  timeFormat = "HH:mm";
  time: Date;
  actual: string;

  constructor(
    private weatherService: WeatherForecastService,
    @Inject(LOCALE_ID) public locale: string
  ) {}

  ngOnInit(): void {
    this.getUserLocation();
    this.getTime();
    console.log(this.locale);
    this.getDate();
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.latLng = this.lat + "," + this.lng;
        this.getWeather(this.latLng);
      });
    } else {
      console.log("User not allowed");
    }
  }

  getTime() {
    this.subscription = timer(0, 1000)
      .pipe(map(() => new Date()))
      .subscribe((time) => {
        this.time = time;
      });
  }

  getWeather(latLng: string) {
    this.weatherService.getWeather(latLng).subscribe((data: any) => {
      this.location = `${data.location.name}, ${data.location.region}`;
      this.temperature = data.current.temp_c;
      this.icon = data.current.condition.icon;
    });
  }

  getDate() {
    const date = new Date();
    this.actual = date.toLocaleDateString("pt-br", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}

MapTo("angularapp/components/header-component")(HeaderComponent);
