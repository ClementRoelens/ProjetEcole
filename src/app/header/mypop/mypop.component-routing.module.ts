import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MypopComponent } from './mypop.component';

const routes: Routes = [
  {
    path: '',
    component: MypopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MypopComponentRoutingModule {}
