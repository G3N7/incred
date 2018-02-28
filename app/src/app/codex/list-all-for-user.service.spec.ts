import { TestBed, inject } from '@angular/core/testing';

import { ListAllForUserService } from './list-all-for-user.service';

describe('ListAllForUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListAllForUserService]
    });
  });

  it('should be created', inject([ListAllForUserService], (service: ListAllForUserService) => {
    expect(service).toBeTruthy();
  }));
});
