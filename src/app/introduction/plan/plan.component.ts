import { Component, OnInit } from '@angular/core';
import { Workshop } from 'src/app/workshops/workshop.model';
import { WORKSHOPS } from 'src/app/workshops/workshops';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  workshops: Workshop[] = WORKSHOPS;

  ngOnInit() {}
}
