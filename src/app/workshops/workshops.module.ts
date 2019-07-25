import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WorkshopsComponent } from "./workshops/workshops.component";
import { WorkshopsRoutingModule } from "./workshops-routing.module";

@NgModule({
  declarations: [WorkshopsComponent],
  imports: [CommonModule, WorkshopsRoutingModule]
})
export class WorkshopsModule {}
