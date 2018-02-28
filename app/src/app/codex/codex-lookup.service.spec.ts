import { TestBed, inject } from '@angular/core/testing';

import { CodexLookupService } from './codex-lookup.service';

describe('CodexLookupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CodexLookupService]
    });
  });

  it('should be created', inject([CodexLookupService], (service: CodexLookupService) => {
    expect(service).toBeTruthy();
  }));
});
