import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-input-component",
  templateUrl: "./input-component.component.html",
  styleUrls: ["./input-component.component.css"],
})
export class InputComponentComponent implements OnInit {
  @Input() type: string;
  @Input() value: string;
  @Input() name: string;

  constructor() {}

  ngOnInit(): void {}

  get inputClasses() {
    const classes = ["input-type-" + this.type];
    return classes;
  }
}

MapTo("angularapp/components/input-component")(InputComponentComponent);
