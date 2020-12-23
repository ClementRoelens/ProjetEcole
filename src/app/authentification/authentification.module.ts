import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AuthentificationPage } from './authentification.page';
import { AuthentificationPageRoutingModule } from './authentification-routing.module';
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
