import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeasHerbsComponent } from './teas-herbs.component';
import { DashboardRoutingModule } from 'src/app/app-sections/teas-herbs/teas-herbs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [TeasHerbsComponent]
})
export class TeasHerbsModule { }
