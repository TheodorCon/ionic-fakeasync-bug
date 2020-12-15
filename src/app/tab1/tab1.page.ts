import { Component } from "@angular/core";
import { Attribute } from "../bug-card/bug-card.component";
@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"],
})
export class Tab1Page {
  attribute?: Attribute;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.attribute = {
        name: "colour",
        id: "123456",
      };
    }, 400);
  }
}
