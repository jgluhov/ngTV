import { Action } from '@ngrx/store';
import { IChannel } from '@interfaces/channel.interface';

export enum ActionTypes {
  LoadChannels = '[Channels] Load Channels',
  LoadChannelsSuccess = '[Channels] Load Channels Success',
  LoadChannelsFailure = '[Channels] Load Channels Failure'
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

export type ActionsUnion =
  LoadChannels |
  LoadChannelsSuccess |
  LoadChannelsFailure;
