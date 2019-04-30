import { IChannel } from '@interfaces/channel.interface';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { uniqBy } from 'lodash';
import { ChannelsSortEnum } from '@channels/enums/channels-sort.enum';

export interface IChannelsState extends EntityState<IChannel> {
  sortBy: string;
  filterBy: string[];
}

export interface IToolbarState {
  sortBy: string;
  filterBy: string;
}

export const channelsAdapter: EntityAdapter<IChannel> = createEntityAdapter<IChannel>({
  selectId: ( channel: IChannel ) => channel.ID
});

export const channelsInitialState = channelsAdapter.getInitialState({
  sortBy: ChannelsSortEnum.ASC,
  filterBy: []
});

export const selectChannelsState = createFeatureSelector<IChannelsState>('channels');

export const {
  selectAll
} = channelsAdapter.getSelectors(selectChannelsState);

export const selectAllChannels = selectAll;

export const selectAllGenres = createSelector(
  selectAllChannels,
  (channels: IChannel[]) => {
    const collection = channels
      .reduce((genres, channel) => genres.concat(channel.genres), []);

    return uniqBy(collection, 'genreID');
  }
);

export const selectToolbarState = createSelector(
  selectChannelsState,
  ({ sortBy, filterBy }: IChannelsState) => {
    return {
      sortBy,
      filterBy
    };
  }
);


