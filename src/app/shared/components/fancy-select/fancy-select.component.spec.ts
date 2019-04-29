import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancySelectComponent } from './fancy-select.component';
import { MatMenuModule, MatListModule } from '@angular/material';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

describe('FancySelectComponent', () => {
  let component: FancySelectComponent;
  let fixture: ComponentFixture<FancySelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatMenuModule,
        ReactiveFormsModule,
        MatListModule
      ],
      declarations: [ FancySelectComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
