import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, Input, OnInit } from "@angular/core";

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

  constructor() {}

  ngOnInit(): void {}

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        console.log("position", position, this.lat, this.lng);
      });
    } else {
      console.log("User not allowed");
    }
  }
}

MapTo("angularapp/components/header-component")(HeaderComponent);
