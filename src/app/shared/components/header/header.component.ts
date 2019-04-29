import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IGenre } from '@interfaces/channel.interface';
import * as fromChannels from '@channels/store/channels.state';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { IFancySelectOption } from '@shared/components/fancy-select/fancy-select.component';
import { ChannelsSortEnum } from '@pages/channels/enums/channels-sort.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selected = '';

  genreOptions$: Observable<IFancySelectOption[]>;

  navLinks = [
    { path: 'first', label: 'First' },
    { path: 'second', label: 'Second' },
    { path: 'channels', label: 'Телеканалы' }
  ];

  channelsSortOptions: IFancySelectOption[] = [
    { key: ChannelsSortEnum.DEFAULT, value: 'По умолчанию' },
    { key: ChannelsSortEnum.ASC, value: 'По возрастанию (А-Я)' },
    { key: ChannelsSortEnum.DESC, value: 'По убыванию (Я-А)' }
  ];

  constructor(
    private store: Store<fromChannels.IChannelsState>
  ) { }

  ngOnInit() {
    this.genreOptions$ = this.store.pipe(
      select(fromChannels.selectAllGenres),
      map((genres: IGenre[]) => {
        return genres.map(({ genreID, genreName }) => ({ key: genreID, value: genreName }));
      })
    );
  }

}
