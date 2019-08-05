import { Component, Input, OnInit } from '@angular/core';
import { Workshop } from '../workshop.model';

@Component({
  selector: 'app-okr-workshop',
  templateUrl: './okr-workshop.component.html',
  styleUrls: ['./okr-workshop.component.scss']
})
export class OkrWorkshopComponent implements OnInit {
  @Input()
  workshop: Workshop;

  ngOnInit() {}
}
