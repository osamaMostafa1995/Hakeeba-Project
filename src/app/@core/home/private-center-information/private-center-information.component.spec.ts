import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateCenterInformationComponent } from './private-center-information.component';

describe('PrivateCenterInformationComponent', () => {
  let component: PrivateCenterInformationComponent;
  let fixture: ComponentFixture<PrivateCenterInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateCenterInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateCenterInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
