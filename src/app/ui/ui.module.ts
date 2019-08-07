import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantRangeComponent } from './participant-range/participant-range.component';
import { TimeLengthComponent } from './time-length/time-length.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ParticipantRangeComponent, TimeLengthComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [ParticipantRangeComponent, TimeLengthComponent]
})
export class UiModule {}
