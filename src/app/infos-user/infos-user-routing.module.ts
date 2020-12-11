import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfosUserPage } from './infos-user.page';

const routes: Routes = [
  {
    path: '',
    component: InfosUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosUserPageRoutingModule {}
