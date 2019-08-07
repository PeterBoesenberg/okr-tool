import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ScheduleComponent } from '../schedule/schedule.component';
import { TimeLengthComponent } from '../ui/time-length/time-length.component';
import { OkrWorkshopComponent } from './okr-workshop/okr-workshop.component';
import { WorkshopsRoutingModule } from './workshops-routing.module';
import { WorkshopsComponent } from './workshops/workshops.component';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [WorkshopsComponent, OkrWorkshopComponent, ScheduleComponent],
  imports: [
    CommonModule,
    WorkshopsRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    UiModule
  ]
})
export class WorkshopsModule {}
