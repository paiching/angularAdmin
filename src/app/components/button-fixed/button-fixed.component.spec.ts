import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonFixedComponent } from './button-fixed.component';

describe('ButtonFixedComponent', () => {
  let component: ButtonFixedComponent;
  let fixture: ComponentFixture<ButtonFixedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonFixedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonFixedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
