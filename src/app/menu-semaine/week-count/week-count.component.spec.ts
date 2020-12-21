import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WeekCountComponent } from './week-count.component';

describe('WeekCountComponent', () => {
  let component: WeekCountComponent;
  let fixture: ComponentFixture<WeekCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekCountComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WeekCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
