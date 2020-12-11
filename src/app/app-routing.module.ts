import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'reinitialisation-mdp',
    loadChildren: () => import('./reinitialisation-mdp/reinitialisation-mdp.module').then( m => m.ReinitialisationMdpPageModule)
  },
  {
    path: 'infos-user',
    loadChildren: () => import('./infos-user/infos-user.module').then( m => m.InfosUserPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
