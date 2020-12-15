import { Component, Input, OnInit } from "@angular/core";

export interface Attribute {
  id: string;
  name: string;
}

@Component({
  selector: "app-bug-card",
  templateUrl: "./bug-card.component.html",
  styleUrls: ["./bug-card.component.scss"],
})
export class BugCardComponent implements OnInit {
  @Input() attribute?: Attribute;

  constructor() {}

  ngOnInit() {}
}
