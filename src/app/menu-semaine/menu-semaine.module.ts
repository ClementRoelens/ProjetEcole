import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuSemainePageRoutingModule } from './menu-semaine-routing.module';

import { MenuSemainePage } from './menu-semaine.page';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuSemainePageRoutingModule
  ],
  declarations: [MenuSemainePage, HeaderComponent]
})
export class MenuSemainePageModule {}
