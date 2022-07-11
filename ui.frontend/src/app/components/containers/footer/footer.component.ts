import { MapTo } from "@adobe/aem-angular-editable-components";
import { ChangeDetectorRef, Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { interval, Observable, Subscription } from "rxjs";
import { map, finalize, take } from "rxjs/operators";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  @Input() text: string;
  timer: number;
  subscription: Subscription;
  reset = false;
  started = 600;

  constructor(
    private router: Router,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.startTimer();
  }

  logout(): void {
    this.stopTimer();
    this.router.navigate([
      "/content/angularapp/us/en/home.html?wcmmode=disabled",
    ]);
  }

  continueBrowsing() {
    console.log("continueBrowsing");
    this.reset = true;
    this.stopTimer();
    this.startTimer();
  }

  stopTimer() {
    this.subscription.unsubscribe();
  }

  startTimer() {
    const time: Observable<number> = interval(1000);
    this.timer = this.started;
    this.changeDetector.detectChanges();

    this.subscription = time
      .pipe(
        take(this.started),
        map((v) => this.started - (v + 1)),
        finalize(() => {
          if (!this.reset) {
            this.stopTimer();
            this.router.navigate(["/content/angularapp/us/en/login.html"]);
          }
        })
      )
      .subscribe((value) => {
        this.reset = false;
        this.timer = value;
        this.changeDetector.detectChanges();
      });
  }
}

MapTo("angularapp/components/footer-component")(FooterComponent);
