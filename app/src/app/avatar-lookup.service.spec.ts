import { TestBed, inject } from '@angular/core/testing';

import { AvatarLookupService } from './avatar-lookup.service';

describe('AvatarLookupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvatarLookupService]
    });
  });

  it('should be created', inject([AvatarLookupService], (service: AvatarLookupService) => {
    expect(service).toBeTruthy();
  }));
});
