import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsComponent } from '@channels/channels.component';
import { ChannelsRoutingModule } from '@channels/channels-routing.module';
import { ChannelCardComponent } from './components/channel-card/channel-card.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ChannelsComponent,
    ChannelCardComponent
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule,
    SharedModule
  ]
})
export class ChannelsModule {
}
