import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatsUpWithRoutingModule } from './whats-up-with-routing.module';
import { PaperGraphComponent } from './paper-graph/paper-graph.component';

@NgModule({
  imports: [
    CommonModule,
    WhatsUpWithRoutingModule
  ],
  declarations: [PaperGraphComponent]
})
export class WhatsUpWithModule { }
