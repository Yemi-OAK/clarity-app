import { TestBed } from '@angular/core/testing';

import { MoonPhaseService } from './moon-phase';

describe('MoonPhase', () => {
  let service: MoonPhaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoonPhaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
