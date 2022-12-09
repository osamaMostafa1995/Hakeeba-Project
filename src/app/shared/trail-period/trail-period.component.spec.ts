import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailPeriodComponent } from './trail-period.component';

describe('TrailPeriodComponent', () => {
  let component: TrailPeriodComponent;
  let fixture: ComponentFixture<TrailPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailPeriodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
