import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfosUserPage } from './infos-user.page';

describe('InfosUserPage', () => {
  let component: InfosUserPage;
  let fixture: ComponentFixture<InfosUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosUserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfosUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
