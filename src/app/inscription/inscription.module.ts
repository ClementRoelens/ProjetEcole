import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionPageRoutingModule } from './inscription-routing.module';

import { InscriptionPage } from './inscription.page';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InscriptionPageRoutingModule
  ],
  declarations: [InscriptionPage,HeaderComponent]
})
export class InscriptionPageModule {}
