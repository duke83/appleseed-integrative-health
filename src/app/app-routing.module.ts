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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
