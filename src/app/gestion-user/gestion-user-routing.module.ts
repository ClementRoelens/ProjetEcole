import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionUSerPage } from './gestion-user.page';

const routes: Routes = [
  {
    path: '',
    component: GestionUSerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionUSerPageRoutingModule {}
