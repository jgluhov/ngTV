import { TestBed } from '@angular/core/testing';

import { ChannelsServiceService } from './channels-service.service';

describe('ChannelsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChannelsServiceService = TestBed.get(ChannelsServiceService);
    expect(service).toBeTruthy();
  });
});
