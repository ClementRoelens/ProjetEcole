import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionUSerPageRoutingModule } from './gestion-user-routing.module';

import { GestionUSerPage } from './gestion-user.page';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionUSerPageRoutingModule
  ],
  declarations: [GestionUSerPage, HeaderComponent]
})
export class GestionUSerPageModule {}
