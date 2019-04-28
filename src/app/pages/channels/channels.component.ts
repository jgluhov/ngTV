import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromChannels from '@channels/store/channels.state';
import { IChannel } from '@interfaces/channel.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {
  channels$: Observable<IChannel[]>;

  constructor(private store: Store<fromChannels.IChannelsState>) { }

  ngOnInit() {
    this.channels$ = this.store.pipe(select(fromChannels.selectAll));
  }

}
