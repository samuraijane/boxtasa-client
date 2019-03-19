import { TestBed } from '@angular/core/testing';

import { FetchCodesService } from './fetch-codes.service';

describe('FetchCodesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchCodesService = TestBed.get(FetchCodesService);
    expect(service).toBeTruthy();
  });
});
