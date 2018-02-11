import { TestBed, inject } from '@angular/core/testing';

import { GetAllEntrantsService } from './get-all-entrants.service';

describe('GetAllEntrantsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllEntrantsService]
    });
  });

  it('should be created', inject([GetAllEntrantsService], (service: GetAllEntrantsService) => {
    expect(service).toBeTruthy();
  }));
});
