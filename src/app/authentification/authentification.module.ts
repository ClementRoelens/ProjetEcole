import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthentificationPageRoutingModule } from './authentification-routing.module';

import { AuthentificationPage } from './authentification.page';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AuthentificationPageRoutingModule
  ],
  declarations: [AuthentificationPage,HeaderComponent]
})
export class AuthentificationPageModule {}
