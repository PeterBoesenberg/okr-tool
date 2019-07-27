import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RessourcesComponent } from './ressources/ressources.component';
import { MeasureComponent } from './measure/measure.component';

const routes: Routes = [
  { path: '', component: RessourcesComponent },
  { path: 'measure', component: MeasureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RessourcesRoutingModule {}
