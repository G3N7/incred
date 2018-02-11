import { TestBed, inject } from '@angular/core/testing';

import { TicketOverrideService } from './ticket-override.service';

describe('TicketOverrideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketOverrideService]
    });
  });

  it('should be created', inject([TicketOverrideService], (service: TicketOverrideService) => {
    expect(service).toBeTruthy();
  }));
});
