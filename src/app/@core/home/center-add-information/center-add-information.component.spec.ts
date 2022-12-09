import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterAddInformationComponent } from './center-add-information.component';

describe('CenterAddInformationComponent', () => {
  let component: CenterAddInformationComponent;
  let fixture: ComponentFixture<CenterAddInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterAddInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterAddInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
