import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-text-component",
  templateUrl: "./text-component.component.html",
  styleUrls: ["./text-component.component.css"],
})
export class TextComponentComponent implements OnInit {
  @Input() text: string;
  @Input() color: "red" | "black" = "black";
  @Input() size: "medium" | "small" | "large" = "medium";

  get textClasses() {
    const classes = ["text-color-" + this.color, "text-size-" + this.size];
    return classes;
  }

  constructor() {}

  ngOnInit(): void {}
}
