import { Component, OnInit, Input, HostListener } from '@angular/core';
import { IChannel } from '@interfaces/channel.interface';

@Component({
  selector: 'app-channel-card',
  templateUrl: './channel-card.component.html',
  styleUrls: ['./channel-card.component.scss']
})
export class ChannelCardComponent implements OnInit {
  @Input() channel: IChannel;
  constructor() { }

  ngOnInit() {
  }

}
