import { Injectable } from "@angular/core";
import { addSeconds, differenceInSeconds, format, getTime } from "date-fns";
import { Observable, Subject, Subscriber } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DateTimeService {
  hour: string;
  date: string;

  constructor() {}

  getDate() {
    this.date = new Date().toLocaleDateString();
    console.log(this.date, "date");
  }

  refreshTime() {
    setInterval(getTime, 1000);
  }

  getTime() {
    this.hour = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setInterval(getTime, 1000);

    console.log(this.hour, "hora");
  }
}
