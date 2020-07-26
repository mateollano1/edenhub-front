import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTrackMoreDetailsComponent } from './order-track-more-details.component';

describe('OrderTrackMoreDetailsComponent', () => {
  let component: OrderTrackMoreDetailsComponent;
  let fixture: ComponentFixture<OrderTrackMoreDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderTrackMoreDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTrackMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
