import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionCagnottePage } from './gestion-cagnotte.page';

const routes: Routes = [
  {
    path: '',
    component: GestionCagnottePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionCagnottePageRoutingModule {}
