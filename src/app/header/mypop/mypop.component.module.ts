import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MypopComponent } from './mypop.component';
import { MypopComponentRoutingModule } from './mypop.component-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MypopComponentRoutingModule
  ],
  declarations: [MypopComponent]
})
export class MypopComponentModule {}
