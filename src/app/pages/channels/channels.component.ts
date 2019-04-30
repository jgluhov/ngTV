import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromChannels from '@channels/store/channels.state';
import { IChannel } from '@interfaces/channel.interface';
import { Observable, Subject, combineLatest, BehaviorSubject } from 'rxjs';
import { scan, map, startWith, withLatestFrom, switchMap } from 'rxjs/operators';

type TQuery = {
  offset: number,
  limit: number
};

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  channels$: Observable<IChannel[]>;
  channelsList$: Observable<{ channels: IChannel[], total: number }>;
  chunkSize = 24;
  channelsLength = 0;
  channelsLength$ = new BehaviorSubject(this.channelsLength);

  constructor(private store: Store<fromChannels.IChannelsState>) { }

  ngOnInit() {
    this.channels$ = this.store.pipe(
      select(fromChannels.selectVisibleChannels)
    );

    this.channelsList$ = combineLatest([this.channels$, this.channelsLength$])
      .pipe(
        map(([channels, channelsLength]: [IChannel[], number]) => {
          return {
            channels: channels.slice(0, channelsLength),
            total: channels.length
          };
        })
      );

    this.loadMore();
  }

  loadMore() {
    this.channelsLength += this.chunkSize;
    this.channelsLength$.next(this.channelsLength);
  }

  isBtnVisible(channelsList) {
    return channelsList.channels.length !== channelsList.total;
  }

}
