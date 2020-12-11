import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionCagnottePage } from './gestion-cagnotte.page';

describe('GestionCagnottePage', () => {
  let component: GestionCagnottePage;
  let fixture: ComponentFixture<GestionCagnottePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCagnottePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionCagnottePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
