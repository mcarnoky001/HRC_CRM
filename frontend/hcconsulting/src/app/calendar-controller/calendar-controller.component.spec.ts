import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarControllerComponent } from './calendar-controller.component';

describe('CalendarControllerComponent', () => {
  let component: CalendarControllerComponent;
  let fixture: ComponentFixture<CalendarControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
