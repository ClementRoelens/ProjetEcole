import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReinitialisationMdpPage } from './reinitialisation-mdp.page';

const routes: Routes = [
  {
    path: '',
    component: ReinitialisationMdpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReinitialisationMdpPageRoutingModule {}
