import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MatMenuModule } from '@angular/material';
import { IGenre } from '@interfaces/channel.interface';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: Partial<Store<IGenre[]>>;

  beforeEach(async(() => {
    store = {
      pipe: () => of([])
    };
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, MatMenuModule ],
      declarations: [ HeaderComponent ],
      providers: [
        { provide: Store, useValue: store }
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
