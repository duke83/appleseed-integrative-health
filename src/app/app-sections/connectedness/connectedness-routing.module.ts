import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectednessComponent } from 'src/app/app-sections/connectedness/connectedness.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectednessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectednessRoutingModule { }
