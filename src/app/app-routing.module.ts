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
    path: 'gestion-cagnotte',
    loadChildren: () => import('./gestion-cagnotte/gestion-cagnotte.module').then( m => m.GestionCagnottePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
