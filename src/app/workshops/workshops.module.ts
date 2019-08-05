import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WorkshopsComponent } from './workshops/workshops.component';
import { WorkshopsRoutingModule } from './workshops-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { OkrWorkshopComponent } from './okr-workshop/okr-workshop.component';
import { RetrospectiveComponent } from './retrospective/retrospective.component';
import { MondayCheckinComponent } from './monday-checkin/monday-checkin.component';
import { ScheduleComponent } from '../schedule/schedule.component';

@NgModule({
  declarations: [
    WorkshopsComponent,
    OkrWorkshopComponent,
    RetrospectiveComponent,
    MondayCheckinComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    WorkshopsRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule
  ]
})
export class WorkshopsModule {}
