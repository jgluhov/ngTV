import { Action } from '@ngrx/store';
import { IChannel } from '@interfaces/channel.interface';
import { ChannelsSortEnum } from '../enums/channels-sort.enum';

export enum ActionTypes {
  LoadChannels = '[Channels] Load Channels',
  LoadChannelsSuccess = '[Channels] Load Channels Success',
  LoadChannelsFailure = '[Channels] Load Channels Failure',
  ChangeSortBy = '[Channels] Change Sort By',
  ChangeFilterBy = '[Channels] Change Filter By'
}

export class LoadChannels implements Action {
  readonly type = ActionTypes.LoadChannels;
}

export class LoadChannelsSuccess implements Action {
  readonly type = ActionTypes.LoadChannelsSuccess;

  constructor(public payload: {
    channels: IChannel[]
  }) {}
}

export class LoadChannelsFailure implements Action {
  readonly type = ActionTypes.LoadChannelsFailure;
}

export class ChangeSortBy implements Action {
  readonly type = ActionTypes.ChangeSortBy;

  constructor(public payload: {
    sortBy: ChannelsSortEnum;
  }) {}
}

export class ChangeFilterBy implements Action {
  readonly type = ActionTypes.ChangeFilterBy;

  constructor(public payload: {
    filterBy: string[];
  }) {}
}

export type ActionsUnion =
  LoadChannels |
  LoadChannelsSuccess |
  LoadChannelsFailure |
  ChangeSortBy |
  ChangeFilterBy;
