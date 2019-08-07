import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AnalyzeComponent } from './analyze/analyze.component';
import { IntroductionRoutingModule } from './introduction-routing.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { PlanComponent } from './plan/plan.component';
import { UiModule } from '../ui/ui.module';

@NgModule({
  declarations: [
    IntroductionComponent,
    AnalyzeComponent,
    PlanComponent,
    OnboardingComponent
  ],
  imports: [
    CommonModule,
    IntroductionRoutingModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    UiModule
  ]
})
export class IntroductionModule {
  panelOpenState: boolean;
}
