import { IChannel } from '@interfaces/channel.interface';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

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


