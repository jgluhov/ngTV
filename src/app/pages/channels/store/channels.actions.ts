import { Action } from '@ngrx/store';

export enum ActionTypes {
  LoadChannels = '[Channels] Load Channels'
}

export class LoadChannels implements Action {
  readonly type = ActionTypes.LoadChannels;
}

export type ActionsUnion = LoadChannels;
