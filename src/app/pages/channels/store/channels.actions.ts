import { Action } from '@ngrx/store';
import { IChannel } from '@interfaces/channel.interface';
import { ChannelsSortEnum } from '../enums/channels-sort.enum';

export enum ActionTypes {
  LoadChannels = '[Channels] Load Channels',
  LoadChannelsSuccess = '[Channels] Load Channels Success',
  LoadChannelsFailure = '[Channels] Load Channels Failure',
  ChangeSortBy = '[Channels] Change Sort By',
  ChangeFilterBy = '[Channels] Change Filter By',
  ChangeToolbarForm = '[Channels] Change Toolbar Form'
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

export class ChangeToolbarForm implements Action {
  readonly type = ActionTypes.ChangeToolbarForm;

  constructor(public payload: {
    filterBy: string[],
    sortBy: ChannelsSortEnum;
  }) {}
}

export type ActionsUnion =
  LoadChannels |
  LoadChannelsSuccess |
  LoadChannelsFailure |
  ChangeToolbarForm;
