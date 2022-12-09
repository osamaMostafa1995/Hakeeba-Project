import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaqebaPaymentComponent } from './haqeba-payment.component';

describe('HaqebaPaymentComponent', () => {
  let component: HaqebaPaymentComponent;
  let fixture: ComponentFixture<HaqebaPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaqebaPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HaqebaPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
