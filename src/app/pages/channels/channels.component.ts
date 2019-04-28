import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromChannels from '@channels/store/channels.state';
import { IChannel, IGenre } from '@interfaces/channel.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  channels$: Observable<IChannel[]>;
  genres$: Observable<IGenre[]>;

  constructor(private store: Store<fromChannels.IChannelsState>) { }

  ngOnInit() {
    this.channels$ = this.store.pipe(select(fromChannels.selectAllChannels));
    this.genres$ = this.store.pipe(select(fromChannels.selectAllGenres));

    this.channels$.subscribe(console.log);
    this.genres$.subscribe(console.log);
  }

}
