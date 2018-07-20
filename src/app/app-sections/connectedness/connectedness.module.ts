import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectednessRoutingModule } from './connectedness-routing.module';
import { ConnectednessComponent } from './connectedness.component';

@NgModule({
  imports: [
    CommonModule,
    ConnectednessRoutingModule
  ],
  declarations: [ConnectednessComponent],
})
export class ConnectednessModule { }
