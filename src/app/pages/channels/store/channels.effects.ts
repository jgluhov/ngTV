import { Action } from '@ngrx/store';
import * as channelsActions from '@channels/store/channels.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ChannelsService } from '@channels/services/channels.service';
import { switchMap, map, catchError } from 'rxjs/operators';
import { IChannel } from '@interfaces/channel.interface';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChannelsEffects {
  @Effect()
  loadChannels$ = this.actions$
    .pipe(
      ofType(channelsActions.ActionTypes.LoadChannels),
      switchMap(() => this.channelsService.getChannels()
        .pipe(
          map((channels: IChannel[]) => new channelsActions.LoadChannelsSuccess({ channels })),
          catchError(() => EMPTY)
        )
      )
    );

  ngrxOnInitEffects(): Action {
    return new channelsActions.LoadChannels();
  }

  constructor(
    private actions$: Actions,
    private channelsService: ChannelsService
  ) {}
}
