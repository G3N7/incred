import { TestBed, inject } from '@angular/core/testing';

import { SaveCodexService } from './save-codex.service';

describe('SaveCodexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveCodexService]
    });
  });

  it('should be created', inject([SaveCodexService], (service: SaveCodexService) => {
    expect(service).toBeTruthy();
  }));
});
