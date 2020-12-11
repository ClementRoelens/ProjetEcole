import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionCommandesPage } from './gestion-commandes.page';

const routes: Routes = [
  {
    path: '',
    component: GestionCommandesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionCommandesPageRoutingModule {}
