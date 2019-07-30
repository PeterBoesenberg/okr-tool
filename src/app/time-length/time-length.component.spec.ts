import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLengthComponent } from './time-length.component';

describe('TimeLengthComponent', () => {
  let component: TimeLengthComponent;
  let fixture: ComponentFixture<TimeLengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeLengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
