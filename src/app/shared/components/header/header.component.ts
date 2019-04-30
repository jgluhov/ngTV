import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IGenre } from '@interfaces/channel.interface';
import * as fromChannels from '@channels/store/channels.state';
import { select, Store } from '@ngrx/store';
import { map, tap, takeUntil } from 'rxjs/operators';
import { ChannelsSortEnum } from '@pages/channels/enums/channels-sort.enum';
import { FormBuilder } from '@angular/forms';
import { FancySelectOptionModel } from '../fancy-select/fancy-select-option.model';
import * as channelsActions from '@channels/store/channels.actions';

interface IToolbarFormValue {
  sortBy: ChannelsSortEnum;
  filterBy: string[];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  genreOptions$: Observable<FancySelectOptionModel[]>;
  toolbarForm$: Observable<IToolbarFormValue>;

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
    filterBy: ['']
  });

  destroyer$ = new Subject();

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

    this.store.pipe(
      select(fromChannels.selectToolbarFormValue),
      takeUntil(this.destroyer$),
      tap((toolbarState) => {
        this.toolbarForm.patchValue(toolbarState, { emitEvent: false });
      })
    ).subscribe();

    this.toolbarForm.valueChanges
      .pipe(takeUntil(this.destroyer$))
      .subscribe((changes: IToolbarFormValue) => {
        this.store.dispatch( new channelsActions.ChangeToolbarForm(changes) );
      });
  }

  ngOnDestroy() {
    this.destroyer$.next();
  }
}
