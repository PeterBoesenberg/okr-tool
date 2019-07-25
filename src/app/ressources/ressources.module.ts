import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RessourcesComponent } from "./ressources/ressources.component";
import { RessourcesRoutingModule } from "./ressources-routing.module";

@NgModule({
  declarations: [RessourcesComponent],
  imports: [CommonModule, RessourcesRoutingModule]
})
export class RessourcesModule {}
