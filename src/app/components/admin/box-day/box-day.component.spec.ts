import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxDayComponent } from './box-day.component';

describe('BoxDayComponent', () => {
  let component: BoxDayComponent;
  let fixture: ComponentFixture<BoxDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
