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
    path: 'gestion-user',
    loadChildren: () => import('./gestion-user/gestion-user.module').then( m => m.GestionUSerPageModule)
  },
  {
    path: 'gestion-cagnotte/:id',
    loadChildren: () => import('./gestion-cagnotte/gestion-cagnotte.module').then( m => m.GestionCagnottePageModule)
  },
  {
    path: 'menu-semaine',
    loadChildren: () => import('./menu-semaine/menu-semaine.module').then( m => m.MenuSemainePageModule)
  },
  {
    path: 'carte',
    loadChildren: () => import('./carte/carte.module').then( m => m.CartePageModule)
  },
  {
    path: 'gestion-commandes',
    loadChildren: () => import('./gestion-commandes/gestion-commandes.module').then( m => m.GestionCommandesPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
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
