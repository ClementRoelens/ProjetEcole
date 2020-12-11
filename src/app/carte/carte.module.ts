import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartePageRoutingModule } from './carte-routing.module';

import { CartePage } from './carte.page';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartePageRoutingModule
  ],
  declarations: [CartePage, HeaderComponent]
})
export class CartePageModule {}
