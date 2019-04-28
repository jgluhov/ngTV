import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChannelsComponent } from './channels.component';
import { ChannelsRoutingModule } from './channels-routing.module';
import { StoreModule } from '@ngrx/store';
import { channelsReducer } from './store/channels.reducer';

@NgModule({
  declarations: [
    ChannelsComponent
  ],
  imports: [
    CommonModule,
    ChannelsRoutingModule,
    StoreModule.forFeature('channels', channelsReducer)
  ]
})
export class ChannelsModule {
}
