import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuSemainePageRoutingModule } from './menu-semaine-routing.module';

import { MenuSemainePage } from './menu-semaine.page';
import { HeaderComponent } from '../header/header.component';
import { LayoutModule} from '@angular/cdk/layout';
import { DashboardDirective } from './dashboard.directive'
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuSemainePageRoutingModule,
    LayoutModule
  ],
  declarations: [MenuSemainePage, HeaderComponent, DashboardDirective,DashboardComponent]
})
export class MenuSemainePageModule {}
