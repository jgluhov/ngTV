import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IGenre } from '@interfaces/channel.interface';
import * as fromChannels from '@channels/store/channels.state';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selected = '';

  genres$: Observable<IGenre[]>;

  navLinks = [
    {
      path: 'first',
      label: 'First'
    },
    {
      path: 'second',
      label: 'Second'
    },
    {
      path: 'channels',
      label: 'Телеканалы'
    }
  ];

  constructor(
    private store: Store<fromChannels.IChannelsState>
  ) { }

  ngOnInit() {
    this.genres$ = this.store.pipe(select(fromChannels.selectAllGenres));
  }

  trackByFn(_: number, item: IGenre) {
    return item.genreID;
  }

}
