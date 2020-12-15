import {
  async,
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
} from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { BugCardComponent } from './bug-card.component';

describe('BugCardComponent', () => {
  let component: BugCardComponent;
  let fixture: ComponentFixture<BugCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BugCardComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(BugCardComponent);
    component = fixture.componentInstance;
  }));

  fit('breaks the code', fakeAsync(() => {
    component.attribute = {name: 'colour', id: '123123'};
    fixture.detectChanges(); // calling detectChanges causes ChunkLoadError

    expect(flush()).toEqual(0); // we haven't started any timers, so flush() should return zero
  }));
});
