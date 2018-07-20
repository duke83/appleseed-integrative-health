import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DietExerciseRoutingModule } from './diet-exercise-routing.module';
import { DietExerciseComponent } from './diet-exercise.component';

@NgModule({
  imports: [
    CommonModule,
    DietExerciseRoutingModule
  ],
  declarations: [DietExerciseComponent]
})
export class DietExerciseModule { }
