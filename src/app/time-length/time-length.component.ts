import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-length',
  templateUrl: './time-length.component.html',
  styleUrls: ['./time-length.component.scss']
})
export class TimeLengthComponent implements OnInit {
  @Input()
  minutes: number;

  ngOnInit() {}
}
