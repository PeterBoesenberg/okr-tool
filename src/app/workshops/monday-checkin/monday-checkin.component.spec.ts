import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MondayCheckinComponent } from './monday-checkin.component';

describe('MondayCheckinComponent', () => {
  let component: MondayCheckinComponent;
  let fixture: ComponentFixture<MondayCheckinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MondayCheckinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MondayCheckinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
