import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsComponent } from '@channels/channels.component';
import { ChannelsRoutingModule } from '@channels/channels-routing.module';
import { ChannelCardComponent } from './components/channel-card/channel-card.component';

@NgModule({
  declarations: [
    ChannelsComponent,
    ChannelCardComponent
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule
  ]
})
export class ChannelsModule {
}
