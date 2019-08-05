import { Component, OnInit } from '@angular/core';
import { WORKSHOPS } from '../workshops';
import { Workshop } from '../workshop.model';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss']
})
export class WorkshopsComponent implements OnInit {
  workshops: Workshop[] = WORKSHOPS;

  ngOnInit() {}
}
