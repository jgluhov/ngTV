import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromChannels from '@channels/store/channels.state';
import { IChannel } from '@interfaces/channel.interface';
import { Observable, Subject, combineLatest, ReplaySubject } from 'rxjs';
import { scan, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  channels$: Observable<IChannel[]>;

  visibleChannels$: Observable<IChannel[]>;
  channelsHandler$ = new ReplaySubject();

  query = { offset: 0, limit: 24, channels: [] };

  constructor(private store: Store<fromChannels.IChannelsState>) { }

  ngOnInit() {
    this.channels$ = this.store.pipe(select(fromChannels.selectAllChannels));

    this.visibleChannels$ = combineLatest([this.channelsHandler$, this.channels$])
      .pipe(
        map(([_, channels]) => channels),
        scan((state, channels: IChannel[]) => {
          const { offset, limit } = this.query;

          const newState = {
            ...this.query,
            channels: [
              ...state.channels,
              ...channels.slice(offset, offset + limit)
            ]
          };

          return newState;
        }, this.query),
        map(({channels}) => channels),
        startWith([])
      );

    // this.visibleChannels$.subscribe(console.log);

    this.channelsHandler$.next();
    // this.channels$.subscribe(console.log);
  }

}
