import { ActionsUnion } from './channels.actions';
import * as ChannelsActions from './channels.actions';
import { channelsInitialState } from './channels.state';

export const channelsReducer = (
  state = channelsInitialState,
  action: ActionsUnion
) => {
  switch (action.type) {
    case ChannelsActions.ActionTypes.LoadChannels: {
      break;
    }

    default: {
      return state;
    }
  }
};

