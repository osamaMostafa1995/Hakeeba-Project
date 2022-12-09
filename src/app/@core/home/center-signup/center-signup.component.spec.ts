import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterSignupComponent } from './center-signup.component';

describe('CenterSignupComponent', () => {
  let component: CenterSignupComponent;
  let fixture: ComponentFixture<CenterSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
