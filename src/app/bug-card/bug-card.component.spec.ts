import { Component } from "@angular/core";
import {
  async,
  ComponentFixture,
  fakeAsync,

  TestBed,
  tick
} from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";
import { Attribute, BugCardComponent } from "./bug-card.component";

@Component({
  template: ` <app-attribute-card
    [attribute]="attribute"
  ></app-attribute-card>`,
})
class TestHostComponent {
  attribute?: Attribute;
}

describe("BugCardComponent", () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<BugCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BugCardComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(BugCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  fit("breaks the code", fakeAsync(async () => {
    component.attribute = { name: "colour", id: "123123" };
    // fixture.detectChanges();
    await fixture.whenStable();

    // console.log(flush());
    tick(1000);
    expect(true).toBeTrue();
  }));
});
