import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-participant-range',
  templateUrl: './participant-range.component.html',
  styleUrls: ['./participant-range.component.scss']
})
export class ParticipantRangeComponent implements OnInit {
  @Input()
  min: number;
  @Input()
  max: number;

  ngOnInit() {}
}
