import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantRangeComponent } from './participant-range.component';

describe('ParticipantRangeComponent', () => {
  let component: ParticipantRangeComponent;
  let fixture: ComponentFixture<ParticipantRangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
