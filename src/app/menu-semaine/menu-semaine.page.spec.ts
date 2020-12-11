import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuSemainePage } from './menu-semaine.page';

describe('MenuSemainePage', () => {
  let component: MenuSemainePage;
  let fixture: ComponentFixture<MenuSemainePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSemainePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuSemainePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
