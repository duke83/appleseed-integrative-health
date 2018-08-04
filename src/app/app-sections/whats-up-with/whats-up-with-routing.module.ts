import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaperGraphComponent } from 'src/app/app-sections/whats-up-with/paper-graph/paper-graph.component';

const routes: Routes = [
  { path: '', component: PaperGraphComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WhatsUpWithRoutingModule { }
