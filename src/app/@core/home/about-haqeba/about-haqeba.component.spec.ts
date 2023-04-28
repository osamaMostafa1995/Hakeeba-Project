import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHaqebaComponent } from './about-haqeba.component';

describe('AboutHaqebaComponent', () => {
  let component: AboutHaqebaComponent;
  let fixture: ComponentFixture<AboutHaqebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutHaqebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutHaqebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
