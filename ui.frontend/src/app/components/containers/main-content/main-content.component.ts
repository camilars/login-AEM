import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.css"],
})
export class MainContentComponent implements OnInit {
  @Input() title1: string;
  @Input() title2: string;
  @Input() title3: string;
  @Input() title4: string;
  @Input() text1: string;
  @Input() text2: string;
  @Input() text3: string;
  @Input() text4: string;

  constructor() {}

  ngOnInit(): void {}
}

MapTo("angularapp/components/main-component")(MainContentComponent);
