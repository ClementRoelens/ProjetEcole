import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReinitialisationMdpPage } from './reinitialisation-mdp.page';

describe('ReinitialisationMdpPage', () => {
  let component: ReinitialisationMdpPage;
  let fixture: ComponentFixture<ReinitialisationMdpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinitialisationMdpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReinitialisationMdpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
