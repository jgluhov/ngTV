import { IChannel } from '@interfaces/channel.interface';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { uniqBy, intersection, size } from 'lodash';
import { ChannelsSortEnum } from '@channels/enums/channels-sort.enum';

export interface IChannelsState extends EntityState<IChannel> {
  sortBy: string;
  filterBy: string[];
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

export const selectToolbarFormValue = createSelector(
  selectChannelsState,
  ({ sortBy, filterBy }: IChannelsState) => {
    return {
      sortBy,
      filterBy
    };
  }
);

export const selectVisibleChannels = createSelector(
  selectAllChannels,
  selectChannelsState,
  (channels, { sortBy, filterBy }) => {

    const channelsToSort = [...channels];

    channelsToSort.sort((channelA, channelB) => {
      if (sortBy === ChannelsSortEnum.DEFAULT) {
        return 0;
      }

      if (sortBy === ChannelsSortEnum.ASC) {
        if (channelA.name > channelB.name) {
          return 1;
        } else if (channelA.name < channelB.name) {
          return -1;
        } else {
          return 0;
        }
      }

      if (sortBy === ChannelsSortEnum.DESC) {
        if (channelA.name < channelB.name) {
          return 1;
        } else if (channelA.name > channelB.name) {
          return -1;
        } else {
          return 0;
        }
      }
    });

    if (filterBy.length) {
      return channelsToSort.filter((channel) => {
        return size(intersection(filterBy, channel.genres.map(genre => genre.genreID)));
      });
    }

    return channelsToSort;
  }
);


