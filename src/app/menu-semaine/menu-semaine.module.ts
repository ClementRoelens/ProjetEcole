import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuSemainePageRoutingModule } from './menu-semaine-routing.module';

import { MenuSemainePage } from './menu-semaine.page';
import { HeaderComponent } from '../header/header.component';
import { LayoutModule} from '@angular/cdk/layout'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuSemainePageRoutingModule,
    LayoutModule
  ],
  declarations: [MenuSemainePage, HeaderComponent]
})
export class MenuSemainePageModule {}
