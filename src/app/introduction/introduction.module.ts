import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { IntroductionRoutingModule } from "./introduction-routing.module";
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  declarations: [IntroductionComponent],
  imports: [CommonModule, IntroductionRoutingModule]
})
export class IntroductionModule {}
