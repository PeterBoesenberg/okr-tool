import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { IntroductionRoutingModule } from "./introduction-routing.module";
import { IntroductionComponent } from "./introduction/introduction.component";
import { AnalyzeComponent } from "./analyze/analyze.component";
import { PlanComponent } from "./plan/plan.component";
import { OnboardingComponent } from "./onboarding/onboarding.component";
import { MatChipsModule } from "@angular/material/chips";

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
    MatExpansionModule,
    MatFormFieldModule,
    MatChipsModule
  ]
})
export class IntroductionModule {
  panelOpenState: boolean;
}
