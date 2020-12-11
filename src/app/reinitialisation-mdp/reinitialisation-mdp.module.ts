import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReinitialisationMdpPageRoutingModule } from './reinitialisation-mdp-routing.module';

import { ReinitialisationMdpPage } from './reinitialisation-mdp.page';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReinitialisationMdpPageRoutingModule
  ],
  declarations: [ReinitialisationMdpPage, HeaderComponent]
})
export class ReinitialisationMdpPageModule {}
