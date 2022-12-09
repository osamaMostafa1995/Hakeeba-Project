import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterEmailVerifyComponent } from './center-email-verify.component';

describe('CenterEmailVerifyComponent', () => {
  let component: CenterEmailVerifyComponent;
  let fixture: ComponentFixture<CenterEmailVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterEmailVerifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterEmailVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
