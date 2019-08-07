import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RessourcesComponent } from './ressources/ressources.component';
import { RessourcesRoutingModule } from './ressources-routing.module';
import { MeasureComponent } from './measure/measure.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [RessourcesComponent, MeasureComponent],
  imports: [CommonModule, RessourcesRoutingModule, MatCardModule]
})
export class RessourcesModule {}
