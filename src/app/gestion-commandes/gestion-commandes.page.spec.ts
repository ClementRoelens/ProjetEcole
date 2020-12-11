import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionCommandesPage } from './gestion-commandes.page';

describe('GestionCommandesPage', () => {
  let component: GestionCommandesPage;
  let fixture: ComponentFixture<GestionCommandesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCommandesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionCommandesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
