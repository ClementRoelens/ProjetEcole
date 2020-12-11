import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionCagnottePageRoutingModule } from './gestion-cagnotte-routing.module';

import { GestionCagnottePage } from './gestion-cagnotte.page';
import { HomePage } from '../home/home.page';
import { GestionUSerPage } from '../gestion-user/gestion-user.page';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionCagnottePageRoutingModule
  ],
  declarations: [GestionCagnottePage, HomePage, GestionUSerPage, HeaderComponent]
})
export class GestionCagnottePageModule {}
