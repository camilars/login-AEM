import { MapTo } from "@adobe/aem-angular-editable-components";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

type AuthParams = {
  user: string;
  password: string;
};

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() titleForm: string;
  @Input() textButton: string;
  @Input() errorMsg: string;
  error: boolean;

  model: AuthParams = {
    user: "",
    password: "",
  };

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.model = {
      user: "",
      password: "",
    };
  }

  login() {
    this.errorMsg = "Ops, usuário ou senha inválidos. Tente novamente!";
    this.error = false;
    if (this.model.user === "admin" && this.model.password === "admin") {
      this.router.navigate([
        "/content/angularapp/us/en/home/home-logada.html?wcmmode=disabled",
      ]);
    } else {
      this.error = true;
    }
  }
}

MapTo("angularapp/components/form-component")(FormComponent);
