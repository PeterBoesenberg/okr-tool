import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {
  workshops: Workshop[] = [
    {
      name: 'Introduction',
      participantsMin: 1,
      participantsMax: 12,
      length: 180
    },
    {
      name: 'Setup OKR process',
      participantsMin: 1,
      participantsMax: 12,
      length: 120
    },
    {
      name: 'Maangement Onboarding',
      participantsMin: 1,
      participantsMax: 12,
      length: 300
    },
    {
      name: 'Employee Onboarding',
      participantsMin: 1,
      participantsMax: 60,
      length: 180
    },
    {
      name: 'Company OKR-Workshop',
      participantsMin: 1,
      participantsMax: 20,
      length: 480
    },
    {
      name: 'Department OKR-Workshop',
      participantsMin: 1,
      participantsMax: 12,
      length: 360
    },
    {
      name: 'Team OKR-Workshop',
      participantsMin: 1,
      participantsMax: 12,
      length: 360
    },
    {
      name: 'Retrospectives',
      participantsMin: 1,
      participantsMax: 30,
      length: 240
    },
    {
      name: 'Training of OKR-Masters',
      participantsMin: 1,
      participantsMax: 4,
      length: 1440
    },
    {
      name: 'Weekly meetings',
      participantsMin: 1,
      participantsMax: 12,
      length: 60
    }
  ];
  constructor() {}

  ngOnInit() {}
}

class Workshop {
  name: string;
  title?: string;
  description?: string;
  participantsMin?: number;
  participantsMax?: number;
  length?: number;
  setting?: string;
}
