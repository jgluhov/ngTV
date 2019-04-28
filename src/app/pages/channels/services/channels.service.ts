import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IChannel } from '@interfaces/channel.interface';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {
  constructor() {}

  getChannels() {
    return of<IChannel[]>([]);
  }
}
