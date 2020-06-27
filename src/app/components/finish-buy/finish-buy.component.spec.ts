import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishBuyComponent } from './finish-buy.component';

describe('FinishBuyComponent', () => {
  let component: FinishBuyComponent;
  let fixture: ComponentFixture<FinishBuyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishBuyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
