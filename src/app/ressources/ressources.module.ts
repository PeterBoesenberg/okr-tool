import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RessourcesComponent } from './ressources/ressources.component';
import { RessourcesRoutingModule } from './ressources-routing.module';
import { MeasureComponent } from './measure/measure.component';

@NgModule({
  declarations: [RessourcesComponent, MeasureComponent],
  imports: [CommonModule, RessourcesRoutingModule]
})
export class RessourcesModule {}
