import { ActionsUnion } from '@channels/store/channels.actions';
import * as ChannelsActions from '@channels/store/channels.actions';
import { channelsInitialState } from '@channels/store/channels.state';
import { channelsAdapter } from '@channels/store/channels.state';

export const channelsReducer = (
  state = channelsInitialState,
  action: ActionsUnion
) => {
  switch (action.type) {
    case ChannelsActions.ActionTypes.LoadChannelsSuccess: {
      return channelsAdapter.addAll(action.payload.channels, state);
    }

    default: {
      return state;
    }
  }
};

