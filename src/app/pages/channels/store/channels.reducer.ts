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

    case ChannelsActions.ActionTypes.ChangeSortBy: {
      return {
        ...state,
        sortBy: action.payload.sortBy
      };
    }

    case ChannelsActions.ActionTypes.ChangeFilterBy: {
      return {
        ...state,
        filterBy: action.payload.filterBy
      };
    }

    default: {
      return state;
    }
  }
};

