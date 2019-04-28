import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsComponent } from './channels.component';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { IChannel } from '@interfaces/channel.interface';

describe('ChannelsComponent', () => {
  let component: ChannelsComponent;
  let fixture: ComponentFixture<ChannelsComponent>;
  let store: Partial<Store<IChannel[]>>;

  beforeEach(async(() => {
    store = {
      pipe: () => of([])
    };

    TestBed.configureTestingModule({
      declarations: [ ChannelsComponent ],
      providers: [
        { provide: Store, useValue: store }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
