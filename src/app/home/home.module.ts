import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../header/header.component';
import { GestionUSerPage } from '../gestion-user/gestion-user.page';
import { GestionCagnottePage } from '../gestion-cagnotte/gestion-cagnotte.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, HeaderComponent, GestionUSerPage, GestionCagnottePage]
})
export class HomePageModule {}
