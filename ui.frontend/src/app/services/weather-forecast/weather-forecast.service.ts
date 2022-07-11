import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class WeatherForecastService {
  constructor(private http: HttpClient) {}
  apiKey = "69cdf03c85d74d8db5325910220807";
  urlApiWeather = "http://api.weatherapi.com/v1";

  getWeather(latLng: string) {
    return this.http.get(
      `${this.urlApiWeather}/current.json?key=${this.apiKey}&q=${latLng}`
    );
  }
}
