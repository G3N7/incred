import { TestBed, inject } from '@angular/core/testing';

import { PickWinnerService } from './pick-winner.service';

describe('PickWinnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PickWinnerService]
    });
  });

  it('should be created', inject([PickWinnerService], (service: PickWinnerService) => {
    expect(service).toBeTruthy();
  }));
});
