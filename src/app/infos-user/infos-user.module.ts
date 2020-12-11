import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfosUserPageRoutingModule } from './infos-user-routing.module';

import { InfosUserPage } from './infos-user.page';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfosUserPageRoutingModule
  ],
  declarations: [InfosUserPage, HeaderComponent]
})
export class InfosUserPageModule {}
