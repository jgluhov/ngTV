import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { IGenre } from '@interfaces/channel.interface';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';
import { FancySelectComponent } from '../fancy-select/fancy-select.component';
import { MatMenuModule, MatTabsModule, MatListModule } from '@angular/material';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: Partial<Store<IGenre[]>>;

  beforeEach(async(() => {
    store = {
      pipe: () => of([])
    };
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatTabsModule,
        MatListModule
      ],
      declarations: [ HeaderComponent, FancySelectComponent ],
      providers: [
        { provide: Store, useValue: store }
      ]
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
