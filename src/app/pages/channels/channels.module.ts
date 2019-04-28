import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChannelsComponent } from '@channels/channels.component';
import { ChannelsRoutingModule } from '@channels/channels-routing.module';
import { StoreModule } from '@ngrx/store';
import { channelsReducer } from '@channels/store/channels.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ChannelsEffects } from '@channels/store/channels.effects';
import { ChannelCardComponent } from './components/channel-card/channel-card.component';

@NgModule({
  declarations: [
    ChannelsComponent,
    ChannelCardComponent
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule,
    StoreModule.forFeature('channels', channelsReducer),
    EffectsModule.forFeature([
      ChannelsEffects
    ])
  ]
})
export class ChannelsModule {
}
