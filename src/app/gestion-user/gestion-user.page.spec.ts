import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionUSerPage } from './gestion-user.page';

describe('GestionUSerPage', () => {
  let component: GestionUSerPage;
  let fixture: ComponentFixture<GestionUSerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionUSerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionUSerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
