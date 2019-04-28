import { IChannel } from '@interfaces/channel.interface';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { uniqBy } from 'lodash';

export interface IChannelsState extends EntityState<IChannel> {
}

export const channelsAdapter: EntityAdapter<IChannel> = createEntityAdapter<IChannel>({
  selectId: ( channel: IChannel ) => channel.ID
});
export const channelsInitialState = channelsAdapter.getInitialState();

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


