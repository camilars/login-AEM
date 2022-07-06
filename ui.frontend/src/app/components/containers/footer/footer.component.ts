import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
})
export class FooterComponent implements OnInit {
  @Input() text: string;
  constructor() {}

  ngOnInit(): void {}

  logout() {
    console.log("voltar para login");
  }
}

MapTo("angularapp/components/footer-component")(FooterComponent);
