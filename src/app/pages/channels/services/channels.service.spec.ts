import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ChannelsService } from './channels.service';

describe('ChannelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ChannelsService = TestBed.get(ChannelsService);
    expect(service).toBeTruthy();
  });
});
