import { ActionsUnion } from '@channels/store/channels.actions';
import * as ChannelsActions from '@channels/store/channels.actions';
import { channelsInitialState } from '@channels/store/channels.state';

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

