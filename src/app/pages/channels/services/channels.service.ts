import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, pluck } from 'rxjs/operators';
import { IChannel } from '@interfaces/channel.interface';

interface IChannelsResponse {
  channelDetails: IChannel[];
  total: number;
}

@Injectable({
  providedIn: 'root'
})
export class ChannelsService {
  constructor(private http: HttpClient) {}

  getChannels() {
    return this.http.get<IChannelsResponse>('assets/channels.json')
      .pipe(
        pluck('channelDetails')
      );
  }
}
