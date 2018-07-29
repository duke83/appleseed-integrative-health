import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeasHerbsComponent } from './teas-herbs.component';

const routes: Routes = [
  { path: '', component: TeasHerbsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {
}
