import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCenterLayoutComponent } from './create-center-layout.component';

describe('CreateCenterLayoutComponent', () => {
  let component: CreateCenterLayoutComponent;
  let fixture: ComponentFixture<CreateCenterLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCenterLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCenterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
