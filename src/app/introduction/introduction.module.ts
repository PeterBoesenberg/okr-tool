import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IntroductionRoutingModule } from './introduction-routing.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { AnalyzeComponent } from './analyze/analyze.component';
import { PlanComponent } from './plan/plan.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { MatChipsModule } from '@angular/material/chips';
import { ParticipantRangeComponent } from '../participant-range/participant-range.component';
import { MatIconModule } from '@angular/material/icon';
import { TimeLengthComponent } from '../time-length/time-length.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    IntroductionComponent,
    AnalyzeComponent,
    PlanComponent,
    OnboardingComponent,
    ParticipantRangeComponent,
    TimeLengthComponent
  ],
  imports: [
    CommonModule,
    IntroductionRoutingModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule
  ]
})
export class IntroductionModule {
  panelOpenState: boolean;
}
