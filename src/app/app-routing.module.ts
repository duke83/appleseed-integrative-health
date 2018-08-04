import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'connectedness',
    loadChildren: './app-sections/connectedness/connectedness.module#ConnectednessModule',
  },
  {
    path: 'teas-herbs',
    loadChildren: './app-sections/teas-herbs/teas-herbs.module#TeasHerbsModule',
  },
  {
    path: 'whats-up-with',
    loadChildren: './app-sections/whats-up-with/whats-up-with.module#WhatsUpWithModule',
  },
  {
    path: '', redirectTo: '/whats-up-with', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
