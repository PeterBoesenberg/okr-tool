import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OkrWorkshopComponent } from './okr-workshop.component';

describe('OkrWorkshopComponent', () => {
  let component: OkrWorkshopComponent;
  let fixture: ComponentFixture<OkrWorkshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OkrWorkshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OkrWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
