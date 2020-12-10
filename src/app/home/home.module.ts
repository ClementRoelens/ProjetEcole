import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../header/header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
<<<<<<< HEAD
  declarations: [HomePage,HeaderComponent]
=======
  declarations: [HomePage, HeaderComponent]
>>>>>>> b6acbd9caf68431b91f8c47cd6b12c607ab69292
})
export class HomePageModule {}
