import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IGenre } from '@interfaces/channel.interface';
import * as fromChannels from '@channels/store/channels.state';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { ChannelsSortEnum } from '@pages/channels/enums/channels-sort.enum';
import { FormBuilder } from '@angular/forms';
import { FancySelectOptionModel } from '../fancy-select/fancy-select-option.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selected = '';

  genreOptions$: Observable<FancySelectOptionModel[]>;

  navLinks = [
    { path: 'first', label: 'First' },
    { path: 'second', label: 'Second' },
    { path: 'channels', label: 'Телеканалы' }
  ];

  channelsSortOptions: FancySelectOptionModel[] = [
    new FancySelectOptionModel('По умолчанию', ChannelsSortEnum.DEFAULT, true),
    new FancySelectOptionModel('По возрастанию (А-Я)', ChannelsSortEnum.ASC),
    new FancySelectOptionModel('По убыванию (Я-А)', ChannelsSortEnum.DESC),
  ];

  toolbarForm = this.fb.group({
    sortBy: [''],
    genres: ['']
  });

  constructor(
    private store: Store<fromChannels.IChannelsState>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.genreOptions$ = this.store.pipe(
      select(fromChannels.selectAllGenres),
      map((genres: IGenre[]) => {
        return genres.map(({ genreID, genreName }) => new FancySelectOptionModel(genreName, genreID));
      })
    );

    this.toolbarForm.valueChanges.subscribe(console.log);
  }
}
